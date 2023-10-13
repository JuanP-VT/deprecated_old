import { ProductCategory } from "../types/product-category";

export default function productCategory(
  name: string,
  imageUrl: string
): ProductCategory {
  return {
    name,
    imageUrl,
  };
}
