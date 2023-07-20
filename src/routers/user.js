const { Router } = require("express");
const multer = require("multer");
const upload = multer({ dest: "./src/uploads/" });

const userController = require("../controllers/user.controller");
const { ROUTERS } = require("../constants/routers");
const middleAuth = require("../middlewares/auth-handler");

const routes = Router();

routes.get(ROUTERS.GET_USERS, middleAuth.verifyToken, userController.getUsers);
routes.get(ROUTERS.GET_USER_BY_ID, middleAuth.verifyToken, userController.getUserById);
routes.patch(ROUTERS.UPDATE_USER, middleAuth.verifyToken, upload.single("avatar"), userController.updateUser);

module.exports = routes;
