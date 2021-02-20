import bodyParser from 'body-parser'
import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import routes from './routes/index'
import sequelize from '../models/index'
const port = process.env.PORT

const app = express()
app.use(cors())

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))

routes(app)
async function syncModels() {
  try {
    //sequelize.sync({ alter: true }).then(() => {
      app.listen(port, () =>
        console.info(`listening at http://localhost:${port}`)
      )
    //})
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}
syncModels()

module.exports = app
