const { Web3 } = require("web3");

const testnet = "https://rpc.sepolia.org";

const web3 = new Web3(testnet);

class Web3Service {
  async getBalance(address) {
    try {
      const balance = (await web3.eth.getBalance(address)).toString();

      return balance;
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error.message);
    }
  }

  async sendEth(data) {
    try {
      const { fromAddress, toAddress, amount, gas, gasPrice, privateKey } = data;

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

      console.log('transactionResult', transactionResult);

      return transactionResult;
    } catch (error) {
      console.error("Đã có lỗi xảy ra:", error.message);
    }
  }
}

module.exports = new Web3Service();
