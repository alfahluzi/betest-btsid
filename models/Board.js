const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Users = require("./User");

const Boards = sequelize.define("Boards", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	title: { type: DataTypes.STRING, allowNull: false },
	color: { type: DataTypes.STRING, defaultValue: "#ffffff" },
});

Boards.belongsTo(Users, { foreignKey: "userid" });

module.exports = Boards;
