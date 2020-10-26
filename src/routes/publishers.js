import PublishersController from '../controllers/PublishersController'

export default [
  {
    method: 'get',
    path: '/',
    controller: PublishersController.getAllPublishers
  },
  {
    method: 'get',
    path: '/:id',
    controller: PublishersController.getOnePublisher
  },
  {
    method: 'post',
    path: '/new',
    controller: PublishersController.insertPublisher
  },
  {
    method: 'delete',
    path: '/:id',
    controller: PublishersController.deletePublisher
  }
]