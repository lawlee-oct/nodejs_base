const db = require("../models/index");

const connectDatabase = async (req, res, next) => {
  try {
    await db.sequelize.authenticate();
    console.log("----> Database Connected <----");
  } catch (error) {
    console.log("Database Connect Fail", error);
  }
};

module.exports = connectDatabase;
