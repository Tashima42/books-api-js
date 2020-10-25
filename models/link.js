'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      link.belongsTo(models.book, {
        foreignKey: 'bookId',
        onDelete: 'CASCADE'
      })
    }
  };
  link.init({
    pdf: DataTypes.STRING,
    mobi: DataTypes.STRING,
    epub: DataTypes.STRING,
    other: DataTypes.STRING,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'link',
  });
  return link;
};