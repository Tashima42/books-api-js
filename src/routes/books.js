import BooksController from '../controllers/BooksController'

export default [
  /**
   * @api {get} /books Request all books
   * @apiName GetAllBooks
   * @apiGroup Books
   * 
   * @apiSuccess {array} books All books basic information. 
   * 
   * @apiSuccessExample Success-Response: 
   *   200 OK
   *    [{
   *      "id": 1,
   *      "name": "Life, the Universe and Everything",
   *      "edition": "first",
   *      "isbn": "0-345-39182-9",
   *      "publisherId": 1,
   *      "published": "1982-08-01",
   *      "language": "en-UK",
   *      "description": "Life, the Universe and Everything is the third book in the five-volume Hitchhiker's Guide to the Galaxy science fiction \"trilogy\" by British writer Douglas Adams. The title refers to the Answer to Life, the Universe, and Everything.",
   *      "createdAt": "2020-10-25T20:13:51.399Z",
   *      "updatedAt": "2020-10-25T20:13:51.399Z"
   *   }]
   * 
   * @apiError BooksNotFound There isn't any data`
   */
  {
    method: 'get',
    path: '/',
    controller: BooksController.getAllBooks
  },
  {
    method: 'get',
    path: '/:id',
    controller: BooksController.getOneBook
  },
  {
    method: 'post',
    path: '/new',
    controller: BooksController.insertBook
  }
]