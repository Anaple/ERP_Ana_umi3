"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryCurrent = queryCurrent;

var _umiRequest = _interopRequireDefault(require("umi-request"));

var _reactCookies = _interopRequireDefault(require("react-cookies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function queryCurrent() {
  return regeneratorRuntime.async(function queryCurrent$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", (0, _umiRequest["default"])('/api/currentUser', {
            params: {
              token: _reactCookies["default"].load('access_token'),
              username: _reactCookies["default"].load('username')
            }
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}