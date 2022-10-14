const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Users = sequelize.define("users", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  level: DataTypes.INTEGER,
  character: DataTypes.STRING,
});

module.exports = Users;
