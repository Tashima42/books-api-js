import Controller from './Controller'

const controller = Controller('link')

controller.getAllLinks = async (req, res) => {
  try {
    const allLinks = await controller.getAll() 
    if(!allLinks) {
      res.status(400).send(`There isn't any data`)
    }
    res.status(200).send(allLinks)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
}

controller.getOneLink = async (req, res) => {
  const { id } = req.params
  try {
    const oneLink = await controller.getOne(id)
    if (!oneLink) {
      res.status(404).send(`There isn't any data`)
    }
    res.status(200).send(oneLink)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
}
export default controller
