'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const configFile = require('../config/config')
const config = configFile[env]
const db = {};

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: 'postgres',
    ssl: true,
    dialecOptions: {
      ssl: true
    },
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    loggin: false
  }
)
/*
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    logging: false
  }
)
*/

//Use sync on all Models
async function syncModels() {
  try {
    await sequelize.sync({ alter: true })
    console.info('Synced')
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}
syncModels()

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
