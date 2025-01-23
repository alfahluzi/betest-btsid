const Board = require("../models/Board");

exports.createBoard = async (req, res) => {
	const { title, color } = req.body;
	try {
		const board = await Board.create({
			title,
			color,
			userid: req.user.id,
		});
		res.status(201).json(board);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getBoards = async (req, res) => {
	try {
		const boards = await Board.findAll({
			where: { userid: req.user.id },
		});
		res.json(boards);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getBoardDetail = async (req, res) => {
	const { id } = req.params;

	try {
		const board = await Board.findOne({
			where: { id, userid: req.user.id },
		});
		if (!board) {
			return res.status(404).json({ error: "board not found" });
		}
		res.status(200).json(board);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deleteBoard = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedCount = await Board.destroy({
			where: { id, userid: req.user.id },
		});
		if (deletedCount === 0) {
			return res.status(404).json({ error: "Board not found" });
		}
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
