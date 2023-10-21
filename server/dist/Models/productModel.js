"use strict";
// Represents a fashion model category for grouping similar products together.
// Each product can vary in size, color, or other attributes but belongs to a specific model category.
// This schema defines the structure for the product model category in MongoDB.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModelModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define the schema for the product model category
const productModelSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "ProductCategory",
    },
});
// Create and export the mongoose model for the product model category.
// This model will allow interaction with the MongoDB collection "ProductModels".
exports.productModelModel = mongoose_1.default.model("ProductModel", productModelSchema);
