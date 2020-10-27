import BooksController from "../controllers/BooksController"

export default [
  /**
   * @api {get} /books Request all books
   * @apiName GetAllBooks
   * @apiGroup Books
   * 
   * @apiSuccess {Array} books All books basic information. 
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
   * @apiError BooksNotFound There isn't any data.
   */
  {
    method: "get",
    path: "/",
    controller: BooksController.getAllBooks
  },
  /**
   * @api {get} /books/:id Request one book by id
   * @apiName GetOneBook
   * @apiGroup Books
   * 
   * @apiParam {Number} id Book's unique ID
   * 
   * @apiSuccess {Object} book All basic information from a book
   * 
   * @apiError BookNotFound There isn't any data.
   */
  {
    method: "get",
    path: "/:id",
    controller: BooksController.getOneBook
  },
  /**
   * @api {post} /books/new Add a new book
   * @apiName AddNewBook
   * @apiGroup Books
   * 
   * @apiParam {String} name Book's name
   * @apiParam {String} edition Book's edition
   * @apiParam {String} isbn Book's unique ISBN number
   * @apiParam {Number} publisherId Book's publisher unique ID
   * @apiParam {Date} published Book's publication date
   * @apiParam {String} description Book's description
   * 
   * @apiSuccess {String} message Success
   * @apiError BadValue Some field has bad information
   */
  {
    method: "post",
    path: "/new",
    controller: BooksController.insertBook
  },

  /**
   * @api {delete} /books/:id Delete a book
   * @apiName DeleteBook
   * @apiGroup Books
   * 
   * @apiParam {Number} id Book's unique id
   * 
   * @apiSuccess {String} message Success
   * @apiError BadValue Some field has bad information
   */
  {
    method: "delete",
    path: "/:id",
    controller: BooksController.deleteBook
  },

  /**
   * @api {put} /books/:id Update a book
   * @apiName UpdateBook
   * @apiGroup Books
   * 
   * @apiParam {Number} id Book's unique id
   * @apiParam {String} name Book's name
   * @apiParam {String} edition Book's edition
   * @apiParam {String} isbn Book's unique ISBN number
   * @apiParam {Number} publisherId Book's publisher unique ID
   * @apiParam {Date} published Book's publication date
   * @apiParam {String} description Book's description
   * 
   * @apiSuccess {String} message Success
   * @apiError BadValue Some field has bad information
   */
  {
    method: "put",
    path: "/:id",
    controller: BooksController.updateBook
  }
]