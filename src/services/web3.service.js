const { Web3 } = require("web3");

const web3 = new Web3(process.env.TESTNET);

class Web3Service {
  async getBalance(address) {
    try {
      const balance = await web3.eth.getBalance(address);

      return {
        balance: web3.utils.fromWei(balance, "ether"),
      };
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error.message);
    }
  }

  async sendEth(data) {
    try {
      const { fromAddress, toAddress, amount, gas, gasPrice, privateKey } =
        data;

      let transaction = {
        from: fromAddress,
        to: toAddress,
        value: web3.utils.toWei(amount, "ether"),
        gas,
        gasPrice: web3.utils.toWei(gasPrice, "gwei"),
      };

      const signTraction = await web3.eth.accounts.signTransaction(
        transaction,
        privateKey
      );

      const transactionResult = await web3.eth.sendSignedTransaction(
        signTraction.rawTransaction
      );

      return transactionResult;
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error.message);
    }
  }

  async getBlock(blockHashOrBlockNumber) {
    try {
      const block = await web3.eth.getBlock(blockHashOrBlockNumber);

      const { hash, parentHash, transactionsRoot, transactions } = block;

      return {
        hash,
        parentHash,
        transactionsRoot,
        transactions,
      };
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error.message);
    }
  }

  async getDetailTransaction(transactionHash) {
    try {
      const detailTransaction = await web3.eth.getTransaction(transactionHash);

      const { hash, from, to, value, gasPrice, gas } = detailTransaction;

      return {
        hash,
        fromAddress: from,
        toAddress: to,
        value: web3.utils.fromWei(value, "ether"),
        gasPrice: web3.utils.fromWei(gasPrice, "ether"),
        gas: web3.utils.fromWei(gas, "ether"),
      };
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error.message);
    }
  }
}

module.exports = new Web3Service();
