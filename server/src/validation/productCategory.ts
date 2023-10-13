import Joi from "joi";

export const productCategoryValidationSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(12).required(),
  imageUrl: Joi.string()
    .uri({ scheme: ["http", "https"] }) // Ensure it's a valid URI with the http/https scheme
    .required(),
});
