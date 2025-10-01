import { NextResponse } from "next/server";
import db from "@/lib/db";
import Newsletter from "@/models/Newsletter";

// GET endpoint for newsletter statistics (admin only)
export async function GET(req) {
  const cookie = await req.headers.get("cookie");
  if (!cookie) {
    return new Response(JSON.stringify("You are not authorized"), {
      status: 401,
    });
  }

  try {
    await db.connect();

    // Get overall statistics
    const totalSubscribers = await Newsletter.countDocuments({});
    const activeSubscribers = await Newsletter.countDocuments({
      status: "active",
    });
    const unsubscribedCount = await Newsletter.countDocuments({
      status: "unsubscribed",
    });
    const inactiveCount = await Newsletter.countDocuments({
      status: "inactive",
    });

    // Get recent subscriptions (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentSubscriptions = await Newsletter.countDocuments({
      subscribedAt: { $gte: thirtyDaysAgo },
      status: "active",
    });

    // Get monthly growth data for the last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const monthlyGrowth = await Newsletter.aggregate([
      {
        $match: {
          subscribedAt: { $gte: sixMonthsAgo },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$subscribedAt" },
            month: { $month: "$subscribedAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 },
      },
    ]);

    // Get top sources
    const topSources = await Newsletter.aggregate([
      {
        $group: {
          _id: "$source",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    return NextResponse.json(
      {
        success: true,
        statistics: {
          overview: {
            totalSubscribers,
            activeSubscribers,
            unsubscribedCount,
            inactiveCount,
            recentSubscriptions,
          },
          monthlyGrowth,
          topSources,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching newsletter statistics:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching statistics.",
      },
      { status: 500 }
    );
  }
}
