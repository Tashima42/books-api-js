"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Controller = _interopRequireDefault(require("./Controller"));

var _models = _interopRequireDefault(require("../../models"));

var Book = _models["default"].book;
var controller = (0, _Controller["default"])("book");

controller.getAllBooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var allBooks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return controller.getAll();

          case 3:
            allBooks = _context.sent;

            if (!allBooks) {
              res.status(404).send("There isn't any data");
            }

            res.status(200).send(allBooks);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error("[books-controller]: ".concat(_context.t0));
            res.status(500).send("Internal server error");

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

controller.getOneBook = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, oneBook;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return controller.getOne(id);

          case 4:
            oneBook = _context2.sent;

            if (!oneBook) {
              res.status(404).send("There isn't any data");
            }

            res.status(200).send(oneBook);
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.error("[books-controller]: ".concat(_context2.t0));
            res.status(500).send("Internal server error");

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

controller.insertBook = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var insertBookData, insertedBook;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            insertBookData = req.body;
            _context3.prev = 1;
            _context3.next = 4;
            return controller.insertOne(insertBookData);

          case 4:
            insertedBook = _context3.sent;

            if (insertedBook) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).send("Bad information"));

          case 7:
            return _context3.abrupt("return", res.status(201).send("Success"));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            console.error("[books-controller]: ".concat(_context3.t0));
            return _context3.abrupt("return", res.status(500).send("Internal server error"));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

controller.deleteBook = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, deletedBook;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return controller.deleteOne(id);

          case 4:
            deletedBook = _context4.sent;

            if (deletedBook) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(404).send("Book not found"));

          case 7:
            return _context4.abrupt("return", res.status(200).send("Success"));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](1);
            console.error("[books]: ".concat(_context4.t0));
            return _context4.abrupt("return", res.status(500).send("internal server error"));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 10]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

controller.updateBook = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, updateData, updatedBook;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            updateData = req.body;
            _context5.prev = 2;
            _context5.next = 5;
            return controller.updateOne(updateData, id);

          case 5:
            updatedBook = _context5.sent;

            if (updatedBook[0]) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(400).send("Bad information"));

          case 8:
            return _context5.abrupt("return", res.status(200).send("Success"));

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](2);
            console.error("[books]: ".concat(_context5.t0));
            return _context5.abrupt("return", res.status(500).send("internal server error"));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 11]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var _default = controller;
exports["default"] = _default;