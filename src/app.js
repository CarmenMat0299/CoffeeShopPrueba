import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes";
import ordersRoutes from "./routes/orders.routes";
import morgan from "morgan";

import config from "./config";

const app = express();

app.set("port", config.port);

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", ordersRoutes);

export default app;
