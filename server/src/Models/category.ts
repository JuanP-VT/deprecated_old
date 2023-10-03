// Represents a product category within the application.
// Each category may have a name and an image URL.
// This schema defines the structure for product categories in MongoDB.

import mongoose from "mongoose";

// Define the schema for the product category
const categorySchema = new mongoose.Schema({
  // The name of the product category (e.g., "Woman clothing", "Lingerie", "Jewelry")
  name: { required: true, type: String },

  // The URL of an image representing the product category
  imageUrl: {
    required: true,
    type: String,
  },
});

// Create and export the mongoose model for the product category.
// This model will allow interaction with the MongoDB collection "ProductCategory".
export const categoryModel = mongoose.model("ProductCategory", categorySchema);
