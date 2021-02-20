'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var fs = require('fs');

var path = require('path');

var basename = path.basename(__filename);

var express = require('express');

var _default = function _default(app) {
  fs.readdirSync(__dirname).filter(function (file) {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  }).map(function (file) {
    var name = file.substr(0, file.indexOf('.'));

    var routes = require("./".concat(file));

    var router = express.Router();
    routes["default"].map(function (route) {
      router[route.method](route.path, route.controller);

      if (route.middleware) {
        router.use("/".concat(route.path), route.middleware);
      }
    });
    app.use("/".concat(name), router);
  });
};

exports["default"] = _default;