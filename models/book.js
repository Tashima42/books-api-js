'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.hasMany(models.link, {
        foreignKey: 'bookId'
      })
      book.belongsToMany(models.author, {
        through: 'authors_books',
        as: 'authors',
        foreignKey: 'bookId',
      })
      book.belongsTo(models.publisher, {
        foreignKey: 'publisherId',
        onDelete: 'CASCADE'
      })
    }
  };
  book.init({
    name: DataTypes.STRING,
    edition: DataTypes.STRING,
    isbn: DataTypes.STRING,
    publisherId: DataTypes.INTEGER,
    published: DataTypes.DATEONLY,
    language: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};