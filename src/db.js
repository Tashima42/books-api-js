const { Sequelize } = require('sequelize')
require('dotenv').config()

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
const sequelize = new Sequelize(process.env.DATABASE_URL)

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

module.exports = sequelize 