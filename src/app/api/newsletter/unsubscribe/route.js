import { NextResponse } from "next/server";
import db from "@/lib/db";
import Newsletter from "@/models/Newsletter";

// PUT endpoint for unsubscribing from newsletter
export async function PUT(req) {
  try {
    await db.connect();

    const { email, action } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const subscriber = await Newsletter.findOne({ email });

    if (!subscriber) {
      return NextResponse.json(
        { message: "Email not found in our newsletter list" },
        { status: 404 }
      );
    }

    if (action === "unsubscribe") {
      subscriber.status = "unsubscribed";
      subscriber.unsubscribedAt = new Date();
      await subscriber.save();

      return NextResponse.json(
        {
          message: "Successfully unsubscribed from newsletter",
          success: true,
        },
        { status: 200 }
      );
    } else if (action === "resubscribe") {
      subscriber.status = "active";
      subscriber.subscribedAt = new Date();
      subscriber.unsubscribedAt = null;
      await subscriber.save();

      return NextResponse.json(
        {
          message: "Successfully resubscribed to newsletter",
          success: true,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid action. Use 'unsubscribe' or 'resubscribe'" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Newsletter update error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while updating subscription.",
      },
      { status: 500 }
    );
  }
}

// DELETE endpoint for permanently removing email from newsletter
export async function DELETE(req) {
  const cookie = await req.headers.get("cookie");
  if (!cookie) {
    return new Response(JSON.stringify("You are not authorized"), {
      status: 401,
    });
  }

  try {
    await db.connect();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const result = await Newsletter.findOneAndDelete({ email });

    if (!result) {
      return NextResponse.json(
        { message: "Email not found in our newsletter list" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Email permanently removed from newsletter",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter deletion error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while deleting subscription.",
      },
      { status: 500 }
    );
  }
}
