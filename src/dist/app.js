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
exports.request = exports.layout = exports.getInitialState = exports.initialStateConfig = void 0;
var react_1 = require("react");
var pro_layout_1 = require("@ant-design/pro-layout");
var antd_1 = require("antd");
var umi_1 = require("umi");
var RightContent_1 = require("@/components/RightContent");
var react_cookies_1 = require("react-cookies");
var Footer_1 = require("@/components/Footer");
var user_1 = require("./services/user");
var defaultSettings_1 = require("../config/defaultSettings");
/**
 * ??????????????????????????????????????????????????? loading
 */
exports.initialStateConfig = {
    loading: react_1["default"].createElement(pro_layout_1.PageLoading, null)
};
function getInitialState() {
    return __awaiter(this, void 0, Promise, function () {
        var fetchUserInfo, checkCookie, currentUser;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fetchUserInfo = function () { return __awaiter(_this, void 0, void 0, function () {
                        var currentUser_1, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, user_1.queryCurrent()];
                                case 1:
                                    currentUser_1 = _a.sent();
                                    return [2 /*return*/, currentUser_1];
                                case 2:
                                    error_1 = _a.sent();
                                    umi_1.history.push('/user/login');
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/, undefined];
                            }
                        });
                    }); };
                    checkCookie = function () { return __awaiter(_this, void 0, void 0, function () {
                        var token, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, react_cookies_1["default"].load('access_token')];
                                case 1:
                                    token = _a.sent();
                                    if (token === undefined) {
                                        return [2 /*return*/, false];
                                    }
                                    else
                                        return [2 /*return*/, true];
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_2 = _a.sent();
                                    console.log(error_2);
                                    return [2 /*return*/, false];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); };
                    return [4 /*yield*/, fetchUserInfo()];
                case 1:
                    currentUser = _a.sent();
                    //??????cookie??????????????????
                    if (!checkCookie() && location.pathname === "/") {
                        console.log(react_cookies_1["default"].load('access_token') + ":CTKTK");
                        return [2 /*return*/, {
                                fetchUserInfo: fetchUserInfo,
                                currentUser: currentUser,
                                settings: defaultSettings_1["default"]
                            }];
                    }
                    // ?????????????????????????????????
                    if (location.pathname.indexOf('/user')) {
                        console.log(react_cookies_1["default"].load('access_token') + ":TKTK");
                        return [2 /*return*/, {
                                fetchUserInfo: fetchUserInfo,
                                currentUser: currentUser,
                                settings: defaultSettings_1["default"]
                            }];
                    }
                    else {
                        return [2 /*return*/, {
                                fetchUserInfo: fetchUserInfo,
                                currentUser: currentUser,
                                settings: defaultSettings_1["default"]
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getInitialState = getInitialState;
exports.layout = function (_a) {
    var initialState = _a.initialState;
    return __assign({ rightContentRender: function () { return react_1["default"].createElement(RightContent_1["default"], null); }, disableContentMargin: false, footerRender: function () { return react_1["default"].createElement(Footer_1["default"], null); }, onPageChange: function () {
            var currentUser = initialState.currentUser;
            var location = umi_1.history.location;
            // ????????????????????????????????? login
            if (!currentUser && location.pathname.indexOf('/user')) {
                umi_1.history.push('/user/login');
            }
        }, menuHeaderRender: undefined }, initialState === null || initialState === void 0 ? void 0 : initialState.settings);
};
var codeMessage = {
    200: '???????????????????????????????????????',
    201: '??????????????????????????????',
    202: '?????????????????????????????????????????????????????????',
    204: '?????????????????????',
    400: '?????????????????????????????????????????????????????????????????????????????????',
    401: '????????????????????????????????????????????????????????????',
    403: '???????????????????????????????????????????????????',
    404: '??????????????????????????????????????????????????????????????????????????????',
    405: '???????????????????????????',
    406: '???????????????????????????',
    410: '?????????????????????????????????????????????????????????',
    422: '??????????????????????????????????????????????????????',
    500: '?????????????????????????????????????????????',
    502: '???????????????',
    503: '???????????????????????????????????????????????????',
    504: '???????????????'
};
/**
 * ??????????????????
 */
var errorHandler = function (error) {
    var response = error.response;
    if (response && response.status) {
        var errorText = codeMessage[response.status] || response.statusText;
        var status = response.status, url = response.url;
        antd_1.notification.error({
            message: "\u8BF7\u6C42\u9519\u8BEF " + status + ": " + url,
            description: errorText
        });
    }
    if (!response) {
        antd_1.notification.error({
            description: '????????????????????????????????????????????????',
            message: '????????????'
        });
    }
    throw error;
};
exports.request = {
    errorHandler: errorHandler
};
