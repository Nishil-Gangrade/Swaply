
const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Books",
        "Stationery",
        "Gadgets",
        "Sports",
        "Furniture",
        "Clothing",
        "Food & Others",
        "Cycles",
        "Lab Essentials",
      ],
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    condition: {
      type: String,
      required: true,
      enum: ["New", "Like New", "Good", "Fair"],
    },
    images: {
      type: [String],
      default: [],
      validate: {
        validator: (images) => images.length <= 5,
        message: "A listing can have at most 5 images",
      },
    },
    status: {
      type: String,
      enum: ["available", "sold"],
      default: "available",
      index: true,
    },
  },
  { timestamps: true }
);

listingSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Listing", listingSchema);
