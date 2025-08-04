import bannerSchema from "./admin/masterData/banner";
import { productSchema } from "./admin/masterData/product";
import productCategorySchema from "./admin/masterData/product-category";
import testimonialSchema from "./admin/masterData/testimonial";

export const schema = {
  types: [
    productSchema,
    productCategorySchema,
    bannerSchema,
    testimonialSchema,
  ],
}
