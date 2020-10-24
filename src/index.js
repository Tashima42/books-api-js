const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
})

async function tryConnect() {
  try {
    await sequelize.authenticate()
    console.log('Ok')
  } catch (error) {
    console.log(error)
  }
}
tryConnect()