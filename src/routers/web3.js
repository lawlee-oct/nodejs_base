const { Router } = require("express");

const web3Controller = require("../controllers/web3.controller");
const { ROUTERS } = require("../constants/routers");

const routes = Router();

routes.get(ROUTERS.GET_BALANCE, web3Controller.getBalance);
routes.post(ROUTERS.SEND_ETH, web3Controller.sendEth);

module.exports = routes;
