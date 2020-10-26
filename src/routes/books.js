import BooksController from '../controllers/BooksController'

export default [
  {
    method: 'get',
    path: '/',
    controller: BooksController.getAll
  }
]