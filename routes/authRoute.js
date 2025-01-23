const { Router } = require("express");
const { login, register } = require("../controllers/authController");

const authRoute = Router();

authRoute.post("/login", login);
authRoute.post("/registration", register);

module.exports = authRoute;
