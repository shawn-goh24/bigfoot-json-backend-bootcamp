"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          content: "Comment 1",
          sighting_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: "Comment 2",
          sighting_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: "Comment 1",
          sighting_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {
        underscore: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("comments", null, {});
  },
};
