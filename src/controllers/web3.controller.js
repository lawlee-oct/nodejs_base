const web3Service = require("../services/web3.service");

class Web3Controller {
  async getBalance(req, res, next) {
    try {
      const { address } = req.body;

      const balance = await web3Service.getBalance(address);

      res.ok(balance, "Get Balance Successfully!");
    } catch (error) {
      next(error);
    }
  }

  async sendEth(req, res, next) {
    try {
      const sendEth = await web3Service.sendEth(req.body);

      res.ok(sendEth, "Send ETH Successfully!");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Web3Controller();
