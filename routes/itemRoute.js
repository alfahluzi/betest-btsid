const { Router } = require("express");
const {
	createItem,
	deleteItem,
	getItemDetail,
	updateItemStatus,
} = require("../controllers/itemController");

const itemRoute = Router();

// API detail item
itemRoute.get("/:id", getItemDetail);

// API untuk membuat item-item to-do di dalam checklist
itemRoute.post("/", createItem);

// API untuk mengubah item-item di dalam checklist
// API untuk mengubah status dari item di dalam checklist (misalkan item sudah selesai dilakukan)
itemRoute.put("/:id", updateItemStatus);

// API untuk menghapus item dari checklist
itemRoute.delete("/:id", deleteItem);

module.exports = itemRoute;
