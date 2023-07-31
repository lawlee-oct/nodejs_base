const { Router } = require("express");

const { ROUTERS } = require("../constants/routers");
const notificationController = require("../controllers/notification.controller");
const middleAuth = require("../middlewares/auth-handler");

const routes = Router();

routes.post(
  ROUTERS.CREATE_NOTIFICATION,
  middleAuth.verifyToken,
  notificationController.createNotification
);

module.exports = routes;
