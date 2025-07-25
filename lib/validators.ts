import z, { email } from "zod";
import { formatNumberWithDecimal } from "./utils";
import { Currency } from "lucide-react";
const currency = z.string().refine(
  (value) => /^\d+(\.\d{2})$/.test(value),
  'Price must have exactly two decimals'
);// Schema for inserting products
export const insertProductSchema = z.object({
    name: z.string().min(3,'Name must be at least 3 characters'),
    slug: z.string().min(3,'Slug must be at least 3 characters'),
    category: z.string().min(3,'Slug must be at least 3 characters'),
    brand: z.string().min(3,'Brand must be at least 3 characters'),
    description: z.string().min(3,'Description must be at least 3 characters'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1,'Product must have at least one image'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency


}) 

export const signInFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6,'Password must be at least 6 characters'),
})