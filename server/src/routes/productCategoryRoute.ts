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
import express from "express";
import { categoryModel } from "../Models/category";
import productCategory from "../factory/product-category";
import { productCategoryValidationSchema } from "../validation/productCategory";
import { isValidObjectId } from "mongoose";
const productCategoryRoute = express.Router();
// Route: Get all categories
productCategoryRoute.get("/", async (req, res) => {
  try {
    // Fetch all categories from the database
    const allCategories = await categoryModel.find();
    res.json({ data: allCategories }); // Respond with a JSON array of categories
  } catch (err) {
    // Handle any errors and respond with a 500 Internal Server Error
    res.status(500).json({ error: err });
  }
});

// Route: Create a new product category
productCategoryRoute.post("/", async (req, res) => {
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
      res.json({ error: { message: errorMessages[0] }, code: 403 });
      return;
    }

    // Check for duplicate category name in the database
    const findDuplicate = await categoryModel.findOne({ name });
    if (findDuplicate) {
      // Respond with a 409 Conflict status code for duplicate entries
      res.json({ error: { message: "Name must be unique" }, code: 409 });
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
//Route : edit existing product category
// required fields name:string imageUrl:string _id: a valid MongoDB ID
productCategoryRoute.put("/", async (req, res) => {
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const _id = req.body._id;
  //check that request body contains required fields
  if (name && imageUrl && _id) {
    //check that id is a valid MongoDb ObjectId
    if (isValidObjectId(_id)) {
      const updatedCategory = productCategory(name, imageUrl);
      //look for object by id
      //if it is found then it gets updated
      const find = await categoryModel.findByIdAndUpdate(
        { _id },
        updatedCategory
      );
      //if not found return feedback
      if (find === null) {
        res.json({ error: "Id not found" });
      }
      res.json({ data: find });
      return;
    } else {
      res.json({ error: "Invalid id format" });
      return;
    }
  }
  res.json({
    error: {
      message: "Missing fields",
      status: 404,
    },
  });
});
export default productCategoryRoute;
