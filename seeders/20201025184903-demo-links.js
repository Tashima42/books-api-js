'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('links', [
      {
        pdf: 'https://github.com/Tashima42/books/raw/main/en/Douglas%20Adams/Life%2C%20The%20universe%20and%20everything/Life%2C-The-Universe-and-Everything_Douglas-Adams.pdf',
        mobi: 'https://github.com/Tashima42/books/raw/main/en/Douglas%20Adams/Life%2C%20The%20universe%20and%20everything/Life%2C-The-Universe-and-Everything_Douglas-Adams.mobi',
        epub: 'https://github.com/Tashima42/books/raw/main/en/Douglas%20Adams/Life%2C%20The%20universe%20and%20everything/Life%2C-The-Universe-and-Everything_Douglas-Adams.epub',
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('links', null, {})
  }
};
