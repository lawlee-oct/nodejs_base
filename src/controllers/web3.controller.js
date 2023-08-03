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

      const data = {
        transactionHash: sendEth?.transactionHash,
        blockHash: sendEth?.blockHash,
        fromAddress: sendEth?.from,
        toAddress: sendEth?.to,
      };

      res.ok(data, "Send ETH Successfully!");
    } catch (error) {
      next(error);
    }
  }

  async getBlock(req, res, next) {
    try {
      const blockHashOrBlockNumber = req.blockHashOrBlockNumber;

      const dataBlock = await web3Service.getBlock(blockHashOrBlockNumber);

      res.ok(dataBlock, "Get block Successfully!");
    } catch (error) {
      next(error);
    }
  }

  async getDetailTransaction(req, res, next) {
    try {
      const { transactionHash } = req.body;

      const detailTransaction = await web3Service.getDetailTransaction(
        transactionHash
      );

      res.ok(detailTransaction, "Get detail transaction Successfully!");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Web3Controller();
