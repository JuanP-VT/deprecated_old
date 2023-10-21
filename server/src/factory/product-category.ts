/**
 * @file This module exports a default function for creating a `ProductCategory` object.
 */
import { ProductCategory } from "../types/product-category";

/**
 * Constructs and returns a new `ProductCategory` object.
 *
 * @param {string} name - The name of the product category.
 * @param {string} imageUrl - The URL of the image representing the product category.
 *
 * @returns {ProductCategory} - An object representing a product category.
 *
 * @example
 * const electronicsCategory = productCategory('Electronics', 'https://example.com/electronics.jpg');
 */

export default function productCategory(
  name: string,
  imageUrl: string
): ProductCategory {
  return {
    name: name.toLowerCase(),
    imageUrl: imageUrl.toLowerCase(),
  };
}
