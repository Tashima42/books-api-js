import Controller from "./Controller"

const controller = Controller("author")

controller.getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await controller.getAll()
    if (!allAuthors) {
      return res.status(404).send("There isn't any data")
    }
    return res.status(200).send(allAuthors)
  } catch (error) {
    console.error(`[authors]: ${error}`)
    return res.status(500).send("Internal server error")
  }
}

controller.getOneAuthor = async (req, res) => {
  const { id } = req.params
  try {
    const oneAuthor = await controller.getOne(id)
    if (!oneAuthor) {
      return res.status(404).send("There isn't any data")
    }
    return res.status(200).send(oneAuthor)
  } catch (error) {
    console.error(`[authors]: ${error}`)
    return res.status(500).send("Internal server error")
  }
}

controller.deleteAuthor = async (req, res) => {
  const { id } = req.params
  try {
    const deletedAuthor = await controller.deleteOne(id)
    if (!deletedAuthor) {
      res.status(400).send('Bad value')
    }
    res.status(200).send('Success')
  } catch (error) {
    console.error(`[publishers]: ${error}`)
    res.status(500).send('Internal server error')
  }
}

controller.insertAuthor = async (req, res) => {
  const insertData = req.body
  try {
    const insertedAuthor = await controller.insertOne(insertData)
    if (!insertedAuthor) {
      return res.status(400).send("Bad values")
    }
    return res.status(200).send("Success")
  } catch (error) {
    console.error(`[authors]: ${error}`)
    return res.status(500).send("Internal server error")
  }
}

controller.updateAuthor = async (req, res) => {
  const { id } = req.params
  const updateData = req.body
  try {
    const updatedAuthor = await controller.updateOne(updateData, id)
    if(!updatedAuthor[0]) {
      return res.status(400).send("Bad values")
    }
    return res.status(200).send("Success")
  } catch (error) {
    console.error(`[authors]: ${error}`)
    return res.status(500).send("Internal server error")
  }
}

export default controller
