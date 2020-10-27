import Controller from "./Controller"
import db from "../../models"

const Book = db.book

const controller = Controller("book")

controller.getAllBooks = async (req, res) => {
  try {
    const allBooks = await controller.getAll()
    if (!allBooks) {
      res.status(404).send("There isn't any data")
    }
    res.status(200).send(allBooks)
  } catch (error) {
    console.error(`[books-controller]: ${error}`)
    res.status(500).send("Internal server error")
  }
}

controller.getOneBook = async (req, res) => {
  const { id } = req.params
  try {
    const oneBook = await controller.getOne(id)
    if (!oneBook) {
      res.status(404).send("There isn't any data")
    }
    res.status(200).send(oneBook)
  } catch (error) {
    console.error(`[books-controller]: ${error}`)
    res.status(500).send("Internal server error")
  }
}

controller.insertBook = async (req, res) => {
  const insertBookData = req.body
  try {
    const insertedBook = await controller.insertOne(insertBookData)
    if (!insertedBook) {
      return res.status(400).send("Bad information")
    }
    return res.status(201).send("Success")
  } catch (error) {
    console.error(`[books-controller]: ${error}`)
    return res.status(500).send("Internal server error")
  }
}

controller.deleteBook = async (req, res) => {
  const { id } = req.params
  try {
    const deletedBook = await controller.deleteOne(id)
    if (!deletedBook) return res.status(404).send("Book not found")
    return res.status(200).send("Success")
  } catch (error) {
    console.error(`[books]: ${error}`)
    return res.status(500).send("internal server error")
  }
}

controller.updateBook = async (req, res) => {
  const { id } = req.params
  const updateData = req.body
  try {
    const updatedBook = await controller.updateOne(updateData, id)
    if (!updatedBook[0]) {
      return res.status(400).send("Bad information")
    }
    return res.status(200).send("Success")
  } catch (error) {
    console.error(`[books]: ${error}`)
    return res.status(500).send("internal server error")
  }
}

export default controller
