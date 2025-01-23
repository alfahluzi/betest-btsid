const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Users = sequelize.define("Users", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	},
	username: { type: DataTypes.STRING, allowNull: false, unique: true },
	password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Users;
