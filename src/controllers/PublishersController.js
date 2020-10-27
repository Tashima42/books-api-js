import Controller from './Controller'
import db from '../../models'

const Publisher = db.publisher
const controller = Controller('publisher')

controller.getAllPublishers = async (req, res) => {
  try {
    const allPublishers = await controller.getAll()
    if (!allPublishers) {
      res.status(404).send(`There isn't any data`)
    }
    res.status(200).send(allPublishers)
  } catch (error) {
    console.error(`[publishers]: ${error}`)
    res.status(500).send('Internal server error')
  }
}

controller.getOnePublisher = async (req, res) => {
  const { id } = req.params
  try {
    const onePublisher = await controller.getOne(id)
    if (!onePublisher) {
      res.status(404).send(`There isn't any data`)
    }
    res.status(200).send(onePublisher)
  } catch (error) {
    console.error(`[publishers]: ${error}`)
    res.status(500).send('Internal server error')
  }
}

controller.insertPublisher = async (req, res) => {
  const insertData = req.body
  try {
    const insertedPublisher = await controller.insertOne(insertData)
    if (!insertedPublisher) {
      res.status(400).send('Bad value')
    }
    res.status(201).send('Success')
  } catch (error) {
    console.error(`[publishers]: ${error}`)
    res.status(500).send('Internal server error')
  }
}

controller.deletePublisher = async (req, res) => {
  const { id } = req.params
  try {
    const deletedPublisher = await controller.deleteOne(id)
    if (!deletedPublisher) {
      res.status(400).send('Bad value')
    }
    res.status(200).send('Success')
  } catch (error) {
    console.error(`[publishers]: ${error}`)
    res.status(500).send('Internal server error')
  }
}

controller.updatePublisher = async (req, res) => {
  const { id } = req.params
  const updateData = req.body
  try {
    const updatedPublisher = await controller.updateOne(updateData, id)
    if (!updatedPublisher) {
      res.status(400).send('Bad value')
    }
    res.status(200).send('Success')
  } catch (error) {
    console.error(`[publishers]: ${error}`)
    res.status(500).send('Internal server error')
  }
}

export default controller