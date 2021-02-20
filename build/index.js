"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index"));

var port = process.env.PORT;
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json({
  limit: '10mb'
}));
app.use(_bodyParser["default"].urlencoded({
  extended: true,
  limit: '10mb'
}));
(0, _index["default"])(app);

function syncModels() {
  return _syncModels.apply(this, arguments);
}

function _syncModels() {
  _syncModels = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return sequelize.sync({
              alter: true
            });

          case 3:
            console.info('Synced');
            app.listen(port, function () {
              console.info("listening at http://localhost:".concat(port));
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error("Error: ".concat(_context.t0));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _syncModels.apply(this, arguments);
}

syncModels();
module.exports = app;