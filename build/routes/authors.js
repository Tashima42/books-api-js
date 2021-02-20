"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AuthorsController = _interopRequireDefault(require("../controllers/AuthorsController"));

var _default = [
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
  method: "get",
  path: "/",
  controller: _AuthorsController["default"].getAllAuthors
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
  method: "get",
  path: "/:id",
  controller: _AuthorsController["default"].getOneAuthor
},
/**
* @api {delete} /authors/:id Delete one author by id
* @apiName DeleteAuthor
* @apiGroup Authors
* 
* @apiParam {Number} id Author's unique ID
* 
* @apiSuccess {String} message Success
* 
* @apiError BadValue Bad values
* @apiError AuthorNotFound There isn't any data.
*/
{
  method: "delete",
  path: "/:id",
  controller: _AuthorsController["default"].deleteAuthor
},
/**
* @api {post} /authors/new Insert a new author
* @apiName InsertAuthor
* @apiGroup Authors
* 
* @apiSuccess {String} message All Success 
* @apiError BadValue Bad values
*/
{
  method: "post",
  path: "/new",
  controller: _AuthorsController["default"].insertAuthor
},
/**
* @api {put} /authors/:id Update an author
* @apiName UpdateAuthor
* @apiGroup Authors
* 
* @apiSuccess {String} message Success 
* @apiError BadValue Bad values
*/
{
  method: "put",
  path: "/:id",
  controller: _AuthorsController["default"].updateAuthor
}];
exports["default"] = _default;