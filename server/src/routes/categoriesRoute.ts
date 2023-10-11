/*
  This module defines an Express route for managing product categories.
  It provides endpoints to fetch all categories and create new ones.
  The code also includes data validation and error handling for each route.

  Possible status : 200, 500, 400, 409 , 201,
*/
import express from "express";
import { categoryModel } from "../Models/category";
import productCategory from "../factory/product-category";
import { productCategoryValidationSchema } from "../validation/productCategory";
const categoriesRoute = express.Router();
// Route: Get all categories
categoriesRoute.get("/", async (req, res) => {
  try {
    // Fetch all categories from the database
    const allCategories = await categoryModel.find();
    res.json(allCategories); // Respond with a JSON array of categories
  } catch (err) {
    // Handle any errors and respond with a 500 Internal Server Error
    res.status(500).json({ error: err });
  }
});

// Route: Create a new product category
categoriesRoute.post("/", async (req, res) => {
  try {
    // Extract data from the request body
    const name = req.body.name;
    const imgUrl = req.body.imageUrl;

    // Create a new product category instance
    const newProductCategory = productCategory(name, imgUrl);

    // Validation
    const validation =
      productCategoryValidationSchema.validate(newProductCategory);

    // Convert validation error details to an array of error messages
    const errorMessages = validation.error?.details.map(
      (detail) => detail.message
    );

    // if validation fails send error details
    if (errorMessages !== undefined && errorMessages?.length > 0) {
      res.json({ message: errorMessages[0] });
      return;
    }

    // Check for duplicate category name in the database
    const findDuplicate = await categoryModel.findOne({ name });
    if (findDuplicate) {
      // Respond with a 409 Conflict status code for duplicate entries
      res.json({ message: "Category name must be unique" });
      return;
    }

    // Save the new category instance to the database
    const newCategoryInstance = new categoryModel(newProductCategory);
    await newCategoryInstance.save();

    // Respond with a 201 Created status code for successful creation
    res.status(201).json({ data: newCategoryInstance });
  } catch (err) {
    // Handle any errors and respond with a 500 Internal Server Error
    console.log(err);
    res.status(500);
  }
});

export default categoriesRoute;
