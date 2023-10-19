"use strict";
// Represents a product category within the application.
// Each category may have a name and an image URL.
// This schema defines the structure for product categories in MongoDB.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define the schema for the product category
const categorySchema = new mongoose_1.default.Schema({
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
exports.categoryModel = mongoose_1.default.model("ProductCategory", categorySchema);
