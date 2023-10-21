/**
 * Represents a product category.
 * The _id field is optional to accommodate new submissions where an ID has not yet been assigned.
 * However, once fetched from the server, the _id field will be populated.
 */
export type ProductCategory = {
  name: string;
  imageUrl: string;
  _id?: string;
};
