'use strict'

const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const express = require('express')

export default (app) => {
  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
      )
    })
    .map((file) => {
      const name = file.substr(0, file.indexOf('.'))

      const routes = require(`./${file}`)

      const router = express.Router()

      routes.default.map((route) => {
        router[route.method](route.path, route.controller)
        if (route.middleware) {
          router.use(`/${route.path}`, route.middleware)
        }
      })

      app.use(`/${name}`, router)
    })
}
