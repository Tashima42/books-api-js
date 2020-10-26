import Controller from './Controller'
import db from '../../models'

const Book = db.book

const controller = Controller('book')

controller.getAllBooks = async (req, res) => {
  try {
    const allBooks = await controller.getAll()
    if (!allBooks) {
      res.status(404).send(`There isn't any data`)
    }
    res.status(200).send(allBooks)
  } catch (error) {
    console.error(`[books-controller]: ${error}`)
    res.status(500).send('Internal server error')
  }
}

controller.getOneBook = async (req, res) => {
  const { id } = req.params
  try {
    const oneBook = await controller.getOne(id)
    if (!oneBook) {
      res.status(404).send(`There isn't any data`)
    }
    res.status(200).send(oneBook)
  } catch (error) {
    console.error(`[books-controller]: ${error}`)
    res.status(500).send('Internal server error')
  }
}

controller.insertBook = async (req, res) => {
  const {
    name,
    edition,
    isbn,
    publisherId,
    published,
    language,
    description
  } = req.body

  try {
    const insertedBook = await Book.create( {
      name,
      edition,
      isbn,
      publisherId,
      published,
      language,
      description
    })
    if (!insertedBook) {
      return res.status(400).send('Bad information')
    }
    return res.status(201).send('Success')
  } catch (error) {
    console.error(`[books-controller]: ${error}`)
    return res.status(500).send('Internal server error')
  }
}

export default controller
