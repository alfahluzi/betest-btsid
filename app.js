const express = require("express");
const authRoute = require("./routes/authRoute");
const boardRoute = require("./routes/boardRoute");
const itemRoute = require("./routes/itemRoute");
const authMiddleware = require("./middlewares/authMiddleware");
const app = express();
const db = require("./config/database");
db.authenticate()
	.then(() => console.log("Database connected"))
	.catch((err) => console.error("Error connecting to database:", err));

// Middleware untuk parsing JSON
app.use(express.json());
app.use("/auth", authRoute);
app.use("/board", authMiddleware, boardRoute);
app.use("/item", authMiddleware, itemRoute);

// Memulai server
const port = 3000;
app.listen(port, () => {
	console.log(`Server berjalan di http://localhost:${port}`);
});
