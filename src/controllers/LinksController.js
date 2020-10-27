import Controller from "./Controller"

const controller = Controller("link")

controller.getAllLinks = async (req, res) => {
  try {
    const allLinks = await controller.getAll()
    if (!allLinks) {
      res.status(400).send("There isn't any data")
    }
    res.status(200).send(allLinks)
  } catch (error) {
    console.error(`[links]: ${error}`)
    res.status(500).send("Internal server error")
  }
}

controller.getOneLink = async (req, res) => {
  const { id } = req.params
  try {
    const oneLink = await controller.getOne(id)
    if (!oneLink) {
      res.status(404).send("There isn't any data")
    }
    res.status(200).send(oneLink)
  } catch (error) {
    console.error(`[links]: ${error}`)
    res.status(500).send("Internal server error")
  }
}

controller.deleteLink = async (req, res) => {
  const { id } = req.params
  try {
    const deletedLink = await controller.deleteOne(id)
    if (!deletedLink) {
      res.status(400).send('Bad value')
    }
    res.status(200).send('Success')
  } catch (error) {
    console.error(`[publishers]: ${error}`)
    res.status(500).send('Internal server error')
  }
}

controller.insertLink = async (req, res) => {
  const insertData = req.body
  try {
    const insertedLink = await controller.insertOne(insertData)
    if (!insertedLink) {
      return res.status(400).send("Bad values")
    }
    return res.status(200).send("Success")
  } catch (error) {
    console.error(`[authors]: ${error}`)
    return res.status(500).send("Internal server error")
  }
}

controller.updateLink = async (req, res) => {
  const { id } = req.params
  const updateData = req.body
  try {
    const updatedLink = await controller.updateOne(updateData, id)
    if (!updatedLink[0]) {
      return res.status(400).send("Bad values")
    }
    return res.status(200).send("Success")
  } catch (error) {
    console.error(`[authors]: ${error}`)
    return res.status(500).send("Internal server error")
  }
}

export default controller
