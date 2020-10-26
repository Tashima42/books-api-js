const db = require('../../models');

const {
  book
} = db;
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const allBooks = await book.findAll({
      include: [{
        model: db.author,
        as: 'authors'
      }, {
        model: db.publisher,
        as: 'publisher'
      }, {
        model: db.link,
        as: 'links'
      }]
    });
    res.send(allBooks);
  } catch (error) {
    console.error(`Error: ${error}`);
    res.send('Internal Server error');
  }
};

module.exports = controller;