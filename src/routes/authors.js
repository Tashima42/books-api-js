import AuthorsController from '../controllers/AuthorsController'

export default [
  /**
* @api {get} /authors Request all authors
* @apiName GetAllAuthors
* @apiGroup Authors
* 
* @apiSuccess {Array} authors All Authors basic information. 
* 
* @apiSuccessExample Success-Response: 
*   200 OK
*    [{
*      "id": 1,
*      "name": "Douglas Adams",
*      "image": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Douglas_adams_portrait_cropped.jpg",
*      "createdAt": "2020-10-25T20:13:51.399Z",
*      "updatedAt": "2020-10-25T20:13:51.399Z"
*   }]
* 
* @apiError AuthorsNotFound There isn't any data.
*/
  {
    method: 'get',
    path: '/',
    controller: AuthorsController.getAllAuthors
  },
  /**
* @api {get} /authors/:id Request one author by id
* @apiName GetOneAuthor
* @apiGroup Authors
* 
* @apiParam {Number} id Author's unique ID
* 
* @apiSuccess {Object} author All basic information from an author
* 
* @apiError AuthorNotFound There isn't any data.
*/
  {
    method: 'get',
    path: '/:id',
    controller: AuthorsController.getOneAuthor
  }
]
