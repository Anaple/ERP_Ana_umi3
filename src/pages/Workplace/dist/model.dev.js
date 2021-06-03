"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _service = require("./service");

var _service2 = require("../Admin/ServerStatusAdmin/service");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Model = {
  namespace: 'dashboardWorkplaceTwo',
  state: {
    currentUser: undefined
  },
  effects: {
    init:
    /*#__PURE__*/
    regeneratorRuntime.mark(function init(_, _ref) {
      var put;
      return regeneratorRuntime.wrap(function init$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              put = _ref.put;
              _context.next = 3;
              return put({
                type: 'fetchUserCurrent'
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, init);
    }),
    fetchUserCurrent:
    /*#__PURE__*/
    regeneratorRuntime.mark(function fetchUserCurrent(_, _ref2) {
      var call, put, response;
      return regeneratorRuntime.wrap(function fetchUserCurrent$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              call = _ref2.call, put = _ref2.put;
              _context2.next = 3;
              return call(_service.queryCurrent);

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return put({
                type: 'save',
                payload: {
                  currentUser: response
                }
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, fetchUserCurrent);
    }),
    fetchProjectNotice:
    /*#__PURE__*/
    regeneratorRuntime.mark(function fetchProjectNotice(_, _ref3) {
      var call, put, response;
      return regeneratorRuntime.wrap(function fetchProjectNotice$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              call = _ref3.call, put = _ref3.put;
              _context3.next = 3;
              return call(_service.queryProjectNotice);

            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return put({
                type: 'save',
                payload: {
                  projectNotice: Array.isArray(response) ? response : []
                }
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, fetchProjectNotice);
    }),
    fetchActivitiesList:
    /*#__PURE__*/
    regeneratorRuntime.mark(function fetchActivitiesList(_, _ref4) {
      var call, put, response;
      return regeneratorRuntime.wrap(function fetchActivitiesList$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              call = _ref4.call, put = _ref4.put;
              _context4.next = 3;
              return call(_service.queryActivities);

            case 3:
              response = _context4.sent;
              _context4.next = 6;
              return put({
                type: 'save',
                payload: {
                  activities: Array.isArray(response) ? response : []
                }
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, fetchActivitiesList);
    })
  },
  fetchGetStatus:
  /*#__PURE__*/
  regeneratorRuntime.mark(function fetchGetStatus(_, _ref5) {
    var call, put, response;
    return regeneratorRuntime.wrap(function fetchGetStatus$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            call = _ref5.call, put = _ref5.put;
            _context5.next = 3;
            return call(_service2.queryStatus);

          case 3:
            response = _context5.sent;
            _context5.next = 6;
            return put({
              type: 'save',
              payload: {
                servers: response.servers
              }
            });

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, fetchGetStatus);
  }),
  reducers: {
    save: function save(state, _ref6) {
      var payload = _ref6.payload;
      return _objectSpread({}, state, {}, payload);
    },
    clear: function clear() {
      return {
        currentUser: undefined,
        projectNotice: [],
        activities: [],
        servers: []
      };
    }
  }
};
var _default = Model;
exports["default"] = _default;