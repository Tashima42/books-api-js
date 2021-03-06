import db from "../../models"

const Controller = (Model) => {
  const model = db[Model]

  const getAll = async () => {
    try {
      const allEntries = await model.findAll()
      return allEntries
    } catch (error) {
      console.error(`[controller]: ${error}`)
    }
  }

  const getOne = async (id) => {
    try {
      const oneEntry = await model.findOne({
        where: {
          id: id
        }
      })
      return oneEntry
    } catch (error) {
      console.error(`[controller]: ${error}`)
    }
  }

  const deleteOne = async (id) => {
    try {
      const deleted = await model.destroy({ where: { id } })
      return deleted
    } catch (error) {
      console.error(`[controller]: ${error}`)
    }
  }

  const insertOne = async (insertData) => {
    try {
      const inserted = await model.create(insertData)
      return inserted
    } catch (error) {
      console.error(`[controller]: ${error}`)
    }
  }

  const updateOne = async (updateData, id) => {
    try {
      const updated = await model.update(updateData, { where: { id } })
      return updated
    } catch (error) {
      console.error(`[controller]: ${error}`)
    }
  }

  return {
    getAll,
    getOne,
    deleteOne,
    insertOne,
    updateOne
  }
}

export default Controller
