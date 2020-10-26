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
    await queryInterface.bulkInsert('books', [
      {
        name: 'Life, the Universe and Everything',
        edition: 'first',
        isbn: '0-345-39182-9',
        publisherId: 1,
        published: '1982-08-01',
        language: 'en-UK',
        description: `Life, the Universe and Everything is the third book in the five-volume Hitchhiker's Guide to the Galaxy science fiction "trilogy" by British writer Douglas Adams. The title refers to the Answer to Life, the Universe, and Everything.`,
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
    return queryInterface.bulkDelete('books', null, {})
  }
};
