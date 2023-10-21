"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  This module defines an Express route for managing product categories.
  It provides endpoints to fetch all categories and create new ones.
  The code also includes data validation and error handling for each route.


  interface ProductCategoryAPIResponse<T> {
  error?: {
    message: string;
    code: number;
  };
  data?: T;
}

*/
const express_1 = __importDefault(require("express"));
const category_1 = require("../Models/category");
const product_category_1 = __importDefault(require("../factory/product-category"));
const productCategory_1 = require("../validation/productCategory");
const productCategoryRoute = express_1.default.Router();
// Route: Get all categories
productCategoryRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all categories from the database
        const allCategories = yield category_1.categoryModel.find();
        res.json({ data: allCategories }); // Respond with a JSON array of categories
    }
    catch (err) {
        // Handle any errors and respond with a 500 Internal Server Error
        res.status(500).json({ error: err });
    }
}));
// Route: Create a new product category
productCategoryRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Extract data from the request body
        const name = req.body.name;
        const imgUrl = req.body.imageUrl;
        // Create a new product category instance
        const newProductCategory = (0, product_category_1.default)(name, imgUrl);
        // Validation
        const validation = productCategory_1.productCategoryValidationSchema.validate(newProductCategory);
        // Convert validation error details to an array of error messages
        const errorMessages = (_a = validation.error) === null || _a === void 0 ? void 0 : _a.details.map((detail) => detail.message);
        // if validation fails send error details
        if (errorMessages !== undefined && (errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.length) > 0) {
            res.json({ error: { message: errorMessages[0] }, code: 403 });
            return;
        }
        // Check for duplicate category name in the database
        const findDuplicate = yield category_1.categoryModel.findOne({ name });
        if (findDuplicate) {
            // Respond with a 409 Conflict status code for duplicate entries
            res.json({ error: { message: "Name must be unique" }, code: 409 });
            return;
        }
        // Save the new category instance to the database
        const newCategoryInstance = new category_1.categoryModel(newProductCategory);
        yield newCategoryInstance.save();
        // Respond with a 201 Created status code for successful creation
        res.status(201).json({ data: newCategoryInstance });
    }
    catch (err) {
        // Handle any errors and respond with a 500 Internal Server Error
        console.log(err);
        res.status(500);
    }
}));
exports.default = productCategoryRoute;
