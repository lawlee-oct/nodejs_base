const { Router } = require("express");

const authController = require("../controllers/auth.controller");
const { ROUTERS } = require("../constants/routers");

const routes = Router();

routes.post(ROUTERS.LOGIN, authController.login);
routes.post(ROUTERS.REGISTER, authController.register);

module.exports = routes;
