const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  permalink: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userEmail: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: false
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true
});

module.exports = User;
