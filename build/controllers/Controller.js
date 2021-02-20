"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../../models"));

var Controller = function Controller(Model) {
  var model = _models["default"][Model];

  var getAll = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var allEntries;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return model.findAll();

            case 3:
              allEntries = _context.sent;
              return _context.abrupt("return", allEntries);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error("[controller]: ".concat(_context.t0));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getAll() {
      return _ref.apply(this, arguments);
    };
  }();

  var getOne = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
      var oneEntry;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return model.findOne({
                where: {
                  id: id
                }
              });

            case 3:
              oneEntry = _context2.sent;
              return _context2.abrupt("return", oneEntry);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error("[controller]: ".concat(_context2.t0));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function getOne(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteOne = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
      var deleted;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return model.destroy({
                where: {
                  id: id
                }
              });

            case 3:
              deleted = _context3.sent;
              return _context3.abrupt("return", deleted);

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.error("[controller]: ".concat(_context3.t0));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function deleteOne(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var insertOne = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(insertData) {
      var inserted;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return model.create(insertData);

            case 3:
              inserted = _context4.sent;
              return _context4.abrupt("return", inserted);

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error("[controller]: ".concat(_context4.t0));

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    return function insertOne(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var updateOne = /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(updateData, id) {
      var updated;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return model.update(updateData, {
                where: {
                  id: id
                }
              });

            case 3:
              updated = _context5.sent;
              return _context5.abrupt("return", updated);

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.error("[controller]: ".concat(_context5.t0));

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));

    return function updateOne(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  return {
    getAll: getAll,
    getOne: getOne,
    deleteOne: deleteOne,
    insertOne: insertOne,
    updateOne: updateOne
  };
};

var _default = Controller;
exports["default"] = _default;