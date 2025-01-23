const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
	"testbtsid",
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: "localhost",
		dialect: "postgres",
		define: {
			timestamps: false, // exclude createdAt and updatedAt
		},
	}
);

module.exports = sequelize;
