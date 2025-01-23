const Item = require("../models/Item");

exports.createItem = async (req, res) => {
	const { boardsid, name } = req.body;

	try {
		const item = await Item.create({ boardsid, name });
		res.status(201).json(item);
	} catch (error) {
		console.log(error);

		res.status(500).json({ error: error.message });
	}
};

exports.updateItemStatus = async (req, res) => {
	const { id } = req.params;
	const { completed, name } = req.body; // Menambahkan 'name' sebagai parameter baru
	if (!completed || !name)
		return res.status(400).json({ message: "Lengkapi status atau nama item" });
	try {
		const item = await Item.findByPk(id);
		if (!item) return res.status(404).json({ message: "Item not found" });

		if (completed !== undefined) item.completed = completed; // Memperbarui status 'completed' jika ada
		if (name) item.name = name; // Memperbarui 'name' jika ada
		await item.save();
		res.json(item);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deleteItem = async (req, res) => {
	const { id } = req.params;
	try {
		const item = await Item.findByPk(id);
		if (!item) return res.status(404).json({ message: "Item not found" });

		await item.destroy();
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getItemDetail = async (req, res) => {
	const { id } = req.params;
	try {
		const item = await Item.findByPk(id);
		if (!item) return res.status(404).json({ message: "Item not found" });

		res.json(item);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
