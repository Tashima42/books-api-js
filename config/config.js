require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: "books_api_development",
    host: process.env.DATABASE_HOST,
    dialect: "postgres"
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: "books_api_test",
    host: process.env.DATABASE_HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: "books_api_production",
    host: process.env.DATABASE_HOST,
    dialect: "postgres"
  }
}