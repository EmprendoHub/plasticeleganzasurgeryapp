import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import db from "@/lib/db";
import Newsletter from "@/models/Newsletter";

export async function POST(req) {
  const cookie = await req.headers.get("cookie");
  if (!cookie) {
    // Not Signed in
    const notAuthorized = "You are not authorized no no no";
    return new Response(JSON.stringify(notAuthorized), {
      status: 400,
    });
  }

  try {
    // Connect to database
    await db.connect();

    const { email, honeypot } = await req.json();

    if (honeypot !== "") {
      return NextResponse.json({
        success: false,
        email,
        message: "no bots",
      });
    }

    if (!email || email.length < 5) {
      return NextResponse.json(
        { message: "Email is required and must be valid" },
        { status: 400 }
      );
    }

    // Get client IP address for tracking
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded
      ? forwarded.split(/, /)[0]
      : req.headers.get("x-real-ip") || "unknown";

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });

    if (existingSubscriber) {
      if (existingSubscriber.status === "unsubscribed") {
        // Reactivate unsubscribed user
        existingSubscriber.status = "active";
        existingSubscriber.subscribedAt = new Date();
        existingSubscriber.unsubscribedAt = null;
        await existingSubscriber.save();

        return NextResponse.json(
          {
            message:
              "Welcome back! You have been resubscribed to our newsletter.",
            email: email,
            success: true,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            message: "You are already subscribed to our newsletter.",
            email: email,
            success: true,
          },
          { status: 200 }
        );
      }
    }

    // Create new newsletter subscription
    const newSubscriber = new Newsletter({
      email,
      ipAddress: ip,
      source: "website",
      status: "active",
    });

    await newSubscriber.save();

    return NextResponse.json(
      {
        message: "Successfully subscribed to newsletter!",
        email: email,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    // Handle duplicate email error
    if (error.code === 11000) {
      return NextResponse.json(
        {
          message: "You are already subscribed to our newsletter.",
          success: true,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while subscribing. Please try again.",
      },
      { status: 500 }
    );
  }
}

// GET endpoint for retrieving newsletter subscriptions (admin only)
export async function GET(req) {
  const cookie = await req.headers.get("cookie");
  if (!cookie) {
    return new Response(JSON.stringify("You are not authorized"), {
      status: 401,
    });
  }

  try {
    await db.connect();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const status = searchParams.get("status") || "active";

    const skip = (page - 1) * limit;

    // Get total count
    const total = await Newsletter.countDocuments({ status });

    // Get paginated results
    const subscribers = await Newsletter.find({ status })
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-__v");

    return NextResponse.json(
      {
        success: true,
        data: subscribers,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: limit,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching newsletter subscribers:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching subscribers.",
      },
      { status: 500 }
    );
  }
}
