// Represents a fashion model category for grouping similar products together.
// Each product can vary in size, color, or other attributes but belongs to a specific model category.
// This schema defines the structure for the product model category in MongoDB.

import mongoose from "mongoose";

// Define the schema for the product model category
const productModelSchema = new mongoose.Schema({
  // The name of the product model category (e.g., "Men's Shirts", "Women's Dresses")
  name: {
    type: String,
    required: true,
  },

  // The default image URL for this product model category
  defaultImageUrl: {
    type: String,
    required: true,
  },

  // An array containing the available colors for products within this category
  colors: [String],

  // The base price for products in this model category
  price: {
    type: Number,
    required: true,
  },

  // The discount percentage applicable to products in this model category
  discount: {
    type: Number,
    required: true,
  },

  // Reference to the product category model
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
  },
});

// Create and export the mongoose model for the product model category.
// This model will allow interaction with the MongoDB collection "ProductModels".
export const productModelModel = mongoose.model(
  "ProductModel",
  productModelSchema
);
