// config/database.js
const { Sequelize } = require("sequelize");
const config = require("./config.json");

const env = process.env.NODE_ENV || "development";
const { username, password, database, host, dialect } = config[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port: 27541, // Specify the port if it's not the default (MySQL default is 3306)
  logging: false, // Set to true if you want to see SQL logs
  pool: {
    max: 5, // Maximum number of connection in pool
    min: 0, // Minimum number of connection in pool
    acquire: 30000, // Maximum time, in milliseconds, that a connection can be idle before being released
    idle: 10000, // Maximum time, in milliseconds, that pool will try to get connection before throwing error
  },
  dialectOptions: {
    connectTimeout: 60000, // Increase the connection timeout (60 seconds)
  },
});

module.exports = sequelize;
