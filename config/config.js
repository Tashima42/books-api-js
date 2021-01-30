require('dotenv').config()

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "books_api_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "books_api_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "books_api_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
}