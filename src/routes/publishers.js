import PublishersController from '../controllers/PublishersController'

export default [
  /**
 * @api {get} /publishers Request all publishers
 * @apiName GetAllPublishers
 * @apiGroup Publishers
 * 
 * @apiSuccess {Array} publishers All publishers basic information. 
 * 
 * @apiSuccessExample Success-Response: 
 *   200 OK
 *    [{
 *      "id": 1,
 *      "name": "Pam Books",
 *      "createdAt": "2020-10-25T20:13:51.399Z",
 *      "updatedAt": "2020-10-25T20:13:51.399Z"
 *   }]
 * 
 * @apiError PublishersNotFound There isn't any data.
 */
  {
    method: 'get',
    path: '/',
    controller: PublishersController.getAllPublishers
  },
  /**
 * @api {get} /publishers/:id Request one publisher by id
 * @apiName GetOnePublisher
 * @apiGroup Publishers
 * 
 * @apiParam {Number} id Publisher's unique ID
 * 
 * @apiSuccess {Object} publisher All basic information from a publisher
 * 
 * @apiError PublisherNotFound There isn't any data.
 */
  {
    method: 'get',
    path: '/:id',
    controller: PublishersController.getOnePublisher
  },
  /**
 * @api {post} /publishers/new Add a new publisher
 * @apiName AddNewPublisher
 * @apiGroup Publishers
 * 
 * @apiParam {String} name Publisher's name
 * 
 * @apiSuccess {String} message Success
 * @apiError BadValue Some field has bad information
 */
  {
    method: 'post',
    path: '/new',
    controller: PublishersController.insertPublisher
  },
  /**
* @api {delete} /publishers/:id Delete a publisher
* @apiName DeletePublisher
* @apiGroup Publishers
* 
* @apiParam {Number} id Publisher's unique id
* 
* @apiSuccess {String} message Success
* @apiError BadValue Some field has bad information
*/
  {
    method: 'delete',
    path: '/:id',
    controller: PublishersController.deletePublisher
  }
]