import Controller from './Controller'

const controller = Controller('author')

controller.getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await controller.getAll()
    if (!allAuthors) {
      res.status(404).send(`There isn't any data`)
    }
    res.status(200).send(allAuthors)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
}

controller.getOneAuthor = async (req, res) => {
  const { id } = req.params
  try {
    const oneAuthor = await controller.getOne(id)
    if (!oneAuthor) {
      res.status(404).send(`There isn't any data`)
    }
    res.status(200).send(oneAuthor)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
}

export default controller
