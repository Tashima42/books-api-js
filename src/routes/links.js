import LinksController from '../controllers/LinksController'

export default [
  {
    method: 'get',
    path: '/',
    controller: LinksController.getAllLinks
  },
  {
    method: 'get',
    path: '/:1',
    controller: LinksController.getOneLink
  }
]