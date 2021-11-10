"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _orders = require("../controllers/orders.controller");

var router = (0, _express.Router)();
router.get("/orders", _orders.getOrders);
router.post("/orders", _orders.createNewOrder);
router.get("/orders/:id", _orders.getOrderById);
router.put("/orders/:id", _orders.updateOrderById);
var _default = router;
exports["default"] = _default;