import { Router } from "express";
import {
  getOrders,
  createNewOrder,
  updateOrdersById,
} from "../controllers/orders.controller";

const router = Router();

router.get("/orders", getOrders);

router.post("/orders", createNewOrder);

router.put("/orders/:IdOrder", updateOrdersById);

export default router;
