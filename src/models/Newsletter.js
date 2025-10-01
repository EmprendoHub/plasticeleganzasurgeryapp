import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email address",
      },
    },
    status: {
      type: String,
      enum: ["active", "inactive", "unsubscribed"],
      default: "active",
    },
    source: {
      type: String,
      default: "website",
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
    unsubscribedAt: {
      type: Date,
      default: null,
    },
    ipAddress: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster email lookups
NewsletterSchema.index({ email: 1 });
NewsletterSchema.index({ status: 1 });
NewsletterSchema.index({ subscribedAt: -1 });

export default mongoose?.models?.Newsletter ||
  mongoose.model("Newsletter", NewsletterSchema);
