import LinksController from '../controllers/LinksController'

export default [
  /**
  * @api {get} /links Request all links
  * @apiName GetAllLinks
  * @apiGroup Links
  * 
  * @apiSuccess {Array} links All links basic information. 
  * 
  * @apiSuccessExample Success-Response: 
  *   200 OK
  *    [{
  *      "id": 1,
  *      "pdf": "https://github.com/Tashima42/books/raw/main/en/Douglas%20Adams/Life%2C%20The%20universe%20and%20everything/Life%2C-The-Universe-and-Everything_Douglas-Adams.pdf",
  *      "mobi": "https://github.com/Tashima42/books/raw/main/en/Douglas%20Adams/Life%2C%20The%20universe%20and%20everything/Life%2C-The-Universe-and-Everything_Douglas-Adams.mobi",
  *      "epub": "https://github.com/Tashima42/books/raw/main/en/Douglas%20Adams/Life%2C%20The%20universe%20and%20everything/Life%2C-The-Universe-and-Everything_Douglas-Adams.epub",
  *      "other": null,
  *      "bookId": 1,
  *      "createdAt": "2020-10-25T20:13:51.399Z",
  *      "updatedAt": "2020-10-25T20:13:51.399Z"
  *   }]
  * 
  * @apiError LinksNotFound There isn't any data.
  */
  {
    method: "get",
    path: "/",
    controller: LinksController.getAllLinks
  },
  /**
  * @api {get} /links/:id Request a group of Links by id
  * @apiName GetLinksGroup
  * @apiGroup Links
  * 
  * @apiParam {Number} id Link's unique ID
  * 
  * @apiSuccess {Object} link All basic information from a group of links
  * 
  * @apiError LinksNotFound There isn't any data.
  */
  {
    method: "get",
    path: "/:id",
    controller: LinksController.getOneLink
  },
  /**
  * @api {delete} /links/:id Delete a group of Links by id
  * @apiName DeleteLinksGroup
  * @apiGroup Links
  * 
  * @apiParam {Number} id Link's unique ID
  * 
  * @apiSuccess {Object} message Success
  * 
  * @apiError LinksNotFound There isn't any data.
  * @apiError BadValue Bad values
  */
  {
    method: "delete",
    path: "/:id",
    controller: LinksController.deleteLink
  },
  /**
  * @api {post} /links/new Create a group of Links
  * @apiName CreateLinksGroup
  * @apiGroup Links
  * 
  * @apiParam {String} pdf Pdf download link
  * @apiParam {String} epub Epub download link
  * @apiParam {String} mobi Mobi download link
  * @apiParam {String} other Other download link
  * @apiParam {Number} bookId Book's unique id
  * 
  * @apiSuccess {String} message Success
  * 
  * @apiError Badvalue Bad Value
  */
  {
    method: "post",
    path: "/new",
    controller: LinksController.insertLink
  },
  /**
  * @api {put} /links/:id Update a group of Links
  * @apiName UpdateLinksGroup
  * @apiGroup Links
  * 
  * @apiParam {Number} id Link's unique ID
  * @apiParam {String} pdf Pdf download link
  * @apiParam {String} epub Epub download link
  * @apiParam {String} mobi Mobi download link
  * @apiParam {String} other Other download link
  * @apiParam {Number} bookId Book's unique id
  * 
  * @apiSuccess {String} message Success
  * 
  * @apiError Badvalue Bad Value
  */
  {
    method: "put",
    path: "/:id",
    controller: LinksController.updateLink
  }
]