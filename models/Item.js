const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Boards = require("./Board");

const Items = sequelize.define("Items", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	name: { type: DataTypes.STRING, allowNull: false },
	completed: { type: DataTypes.BOOLEAN, defaultValue: false },
});

Items.belongsTo(Boards, { foreignKey: "boardsid" });

module.exports = Items;
