'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authors_books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      authors_books.hasMany(models.book, {
        foreignKey: 'bookId'
      })
      authors_books.hasMany(models.author, {
        foreignKey: 'authorId'
      })
    }
  };
  authors_books.init({
    bookId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'authors_books',
  });
  return authors_books;
};