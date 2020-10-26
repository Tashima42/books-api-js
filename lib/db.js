const {
  Sequelize
} = require('sequelize');

const sequelize = new Sequelize('postgres', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
}); //Use sync on all Models

async function syncModels() {
  try {
    await sequelize.sync({
      alter: true
    });
    console.log('Synced');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

syncModels();
module.exports = sequelize;