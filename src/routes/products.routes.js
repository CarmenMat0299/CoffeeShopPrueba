import { Router } from "express";
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/:IdProduct", getProductById);

router.delete("/products/:IdProduct", deleteProductById);

router.put("/products/:IdProduct", updateProductById);

export default router;
