const { Router } = require("express");
const {
	createBoard,
	deleteBoard,
	getBoardDetail,
	getBoards,
} = require("../controllers/boardController");

const boardRoute = Router();

// API untuk menampilkan checklist-checklist yang sudah dibuat
boardRoute.get("/", getBoards);

// API Detail Checklist (Berisi item-item to-do yang sudah dibuat)
boardRoute.get("/:id", getBoardDetail);

// API untuk membuat checklist (berdasarkan contoh gambar 2, adalah kotak-kotak yang berwarna)
boardRoute.post("/", createBoard);

// API untuk menghapus checklist
boardRoute.delete("/:id", deleteBoard);

module.exports = boardRoute;
