const { Router } = require("express");

const userController = require("../controllers/user.controller");
const { ROUTERS } = require("../constants/routers");

const routes = Router();

routes.get(ROUTERS.GET_USERS, userController.getUsers);
routes.get(ROUTERS.GET_USER_BY_ID, userController.getUserById);

module.exports = routes;
