/*
  This module defines an Express route for managing product categories.
  It provides endpoints to fetch all categories and create new ones.
  The code also includes data validation and error handling for each route.
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
    res.status(200).json(allCategories); // Respond with a JSON array of categories
  } catch (err) {
    // Handle any errors and respond with a 500 Internal Server Error
    res.status(500).json({ error: err });
  }
});

// Route: Create a new category
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

    if (validation.error) {
      // Respond with a 400 Bad Request status code and validation error details
      res.status(400).json({ error: validation.error.details });
      return;
    }

    // Check for duplicate category name in the database
    const findDuplicate = await categoryModel.findOne({ name });

    if (findDuplicate) {
      // Respond with a 409 Conflict status code for duplicate entries
      res.status(409).send("Duplicate category name");
      return;
    }

    // Save the new category instance to the database
    const newCategoryInstance = new categoryModel(newProductCategory);
    await newCategoryInstance.save();

    // Respond with a 201 Created status code for successful creation
    res.status(201).send("Success");
  } catch (err) {
    // Handle any errors and respond with a 500 Internal Server Error
    res.status(500).json({ error: err });
  }
});

export default categoriesRoute;
