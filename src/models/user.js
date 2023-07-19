"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }

  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      user_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );

  return User;
};
