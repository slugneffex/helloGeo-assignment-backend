'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        permalink: 'john-doe',
        userName: 'John Doe',
        userEmail: 'john.doe@example.com',
        userPassword: 'password123', // Make sure to hash passwords in a real application
        enabled: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permalink: 'jane-smith',
        userName: 'Jane Smith',
        userEmail: 'jane.smith@example.com',
        userPassword: 'password123',
        enabled: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permalink: 'mike-jones',
        userName: 'Mike Jones',
        userEmail: 'mike.jones@example.com',
        userPassword: 'password123',
        enabled: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permalink: 'emily-johnson',
        userName: 'Emily Johnson',
        userEmail: 'emily.johnson@example.com',
        userPassword: 'password123',
        enabled: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permalink: 'chris-lee',
        userName: 'Chris Lee',
        userEmail: 'chris.lee@example.com',
        userPassword: 'password123',
        enabled: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
