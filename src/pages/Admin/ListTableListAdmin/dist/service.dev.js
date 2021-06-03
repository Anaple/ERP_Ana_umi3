"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryUser = queryUser;
exports.removeUser = removeUser;
exports.addUser = addUser;
exports.updateUser = updateUser;

var _umiRequest = _interopRequireDefault(require("umi-request"));

var _reactCookies = _interopRequireDefault(require("react-cookies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function queryUser(params) {
  return regeneratorRuntime.async(function queryUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", (0, _umiRequest["default"])('/api/table/admin/queryemployee', {
            params: _objectSpread({}, params, {
              token: _reactCookies["default"].load('access_token')
            })
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function removeUser(params) {
  return regeneratorRuntime.async(function removeUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", (0, _umiRequest["default"])('/api/user/list', {
            method: 'POST',
            data: _objectSpread({}, params, {
              todo: 'delete',
              token: _reactCookies["default"].load('access_token')
            })
          }));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function addUser(params) {
  return regeneratorRuntime.async(function addUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", (0, _umiRequest["default"])('/api/user/list', {
            method: 'POST',
            data: _objectSpread({}, params, {
              todo: 'add',
              token: _reactCookies["default"].load('access_token')
            })
          }));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function updateUser(params) {
  return regeneratorRuntime.async(function updateUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", (0, _umiRequest["default"])('/api/user/list', {
            method: 'POST',
            data: _objectSpread({}, params, {
              todo: 'update',
              token: _reactCookies["default"].load('access_token')
            })
          }));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
}