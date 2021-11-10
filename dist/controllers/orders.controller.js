"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrderById = exports.getOrders = exports.getOrderById = exports.deleteOrderById = exports.createNewOrder = void 0;

var _database = require("../database");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getOrders = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var pool, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.querys.getAllOrders);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getOrders(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getOrders = getOrders;

var createNewOrder = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, price, name, image, quantity, pool;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, price = _req$body.price, name = _req$body.name, image = _req$body.image;
            quantity = req.body.quantity;

            if (!(price == null || name == null || image == null)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "Please fill all fields"
            }));

          case 4:
            if (quantity == null) quantity = 0;
            _context2.prev = 5;
            _context2.next = 8;
            return (0, _database.getConnection)();

          case 8:
            pool = _context2.sent;
            _context2.next = 11;
            return pool.request().input("price", _database.sql.Int, price).input("name", _database.sql.VarChar, name).input("image", _database.sql.VarChar, image).query(_database.querys.addNewOrder);

          case 11:
            res.json({
              price: price,
              name: name,
              image: image
            });
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](5);
            res.status(500);
            res.send(_context2.t0.message);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 14]]);
  }));

  return function createNewOrder(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNewOrder = createNewOrder;

var getOrderById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var pool, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("id", req.params.id).query(_database.querys.getProducById);

          case 6:
            result = _context3.sent;
            return _context3.abrupt("return", res.json(result.recordset[0]));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getOrderById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOrderById = getOrderById;

var deleteOrderById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var pool, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("id", req.params.id).query(_database.querys.deleteOrder);

          case 6:
            result = _context4.sent;

            if (!(result.rowsAffected[0] === 0)) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.sendStatus(404));

          case 9:
            return _context4.abrupt("return", res.sendStatus(204));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            res.status(500);
            res.send(_context4.t0.message);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function deleteOrderById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteOrderById = deleteOrderById;

var updateOrderById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body2, id, price, name, image, pool;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, id = _req$body2.id, price = _req$body2.price, name = _req$body2.name, image = _req$body2.image;

            if (!(id == null || price == null || name == null || image == null)) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              msg: " Please fill all fields"
            }));

          case 3:
            _context5.prev = 3;
            _context5.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context5.sent;
            _context5.next = 9;
            return pool.request().input("price", _database.sql.Int, price).input("name", _database.sql.VarChar, name).input("image", _database.sql.VarChar, image).input("id", req.params.id).query(_database.querys.updateOrderById);

          case 9:
            res.json({
              name: name,
              description: description,
              quantity: quantity
            });
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](3);
            res.status(500);
            res.send(_context5.t0.message);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 12]]);
  }));

  return function updateOrderById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateOrderById = updateOrderById;