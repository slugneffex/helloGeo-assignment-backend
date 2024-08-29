'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      permalink: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userEmail: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      userPassword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
