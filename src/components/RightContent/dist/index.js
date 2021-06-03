"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_1 = require("react");
var umi_1 = require("umi");
var AvatarDropdown_1 = require("./AvatarDropdown");
var react_cookies_1 = require("react-cookies");
var index_less_1 = require("./index.less");
var umi_2 = require("umi");
var querystring_1 = require("querystring");
var login_1 = require("@/services/login");
var loginOut = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, query, pathname, redirect;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, login_1.outLogin()];
            case 1:
                _b.sent();
                _a = umi_2.history.location, query = _a.query, pathname = _a.pathname;
                redirect = query.redirect;
                // Note: There may be security issues, please note
                if (window.location.pathname !== '/user/login' && !redirect) {
                    umi_2.history.replace({
                        pathname: '/user/login',
                        search: querystring_1.stringify({
                            redirect: pathname
                        })
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
var ENVTagColor = {
    dev: 'orange',
    test: 'green',
    pre: '#87d068'
};
var GlobalHeaderRight = function () {
    var _a = umi_1.useModel('@@initialState'), initialState = _a.initialState, setInitialState = _a.setInitialState;
    if (!initialState || !initialState.settings) {
        return null;
    }
    var _b = initialState.settings, navTheme = _b.navTheme, layout = _b.layout;
    var className = index_less_1["default"].right;
    if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
        className = index_less_1["default"].right + "  " + index_less_1["default"].dark;
    }
    return (react_1["default"].createElement(antd_1.Space, { className: className },
        react_1["default"].createElement(AvatarDropdown_1["default"], null),
        react_1["default"].createElement("span", null,
            react_1["default"].createElement(antd_1.Tag, { color: ENVTagColor['dev'] },
                REACT_APP_ENV,
                " dev_mode")),
        react_1["default"].createElement("span", { className: index_less_1["default"].action, onClick: function () {
                setInitialState(__assign(__assign({}, initialState), { currentUser: undefined }));
                react_cookies_1["default"].remove('access_token');
                react_cookies_1["default"].remove('username');
                loginOut();
                return;
            } },
            react_1["default"].createElement(icons_1.LogoutOutlined, null))));
};
exports["default"] = GlobalHeaderRight;
