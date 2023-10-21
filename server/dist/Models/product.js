"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define the schema for a product
const productSchema = new mongoose_1.default.Schema({
    // Reference to another model (ProductModel)
    model: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "ProductModel",
    },
    // An array of image URLs for the product
    images: { type: [String], required: true },
    color: { type: String, required: true },
    size: {
        // The name of the size (e.g., "S", "M")
        name: String,
        // An array to specify different size properties as key-value pairs(e.g., {"shoulders: 100cm"}, {"chest: 200cm}")
        description: [{ key: String, value: String }],
        required: true,
    },
    // The quantity of this product available in stock
    quantity: { type: Number, required: true },
    // An array to specify a list descriptions as key-value pairs (e.g., "color: black", "style: fashionable")
    description: [{ key: String, value: String }],
});
// Create and export the mongoose model for the product category.
// This model will allow interaction with the MongoDB collection "Product".
exports.ProductModel = mongoose_1.default.model("Product", productSchema);
