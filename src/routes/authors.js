import AuthorsController from '../controllers/AuthorsController'

export default [
  {
    method: 'get',
    path: '/',
    controller: AuthorsController.getAllAuthors
  },
  {
    method: 'get',
    path: '/:id',
    controller: AuthorsController.getOneAuthor
  }
]
