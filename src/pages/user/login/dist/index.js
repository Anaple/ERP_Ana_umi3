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
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = require("react");
var pro_form_1 = require("@ant-design/pro-form");
var umi_1 = require("umi");
var Footer_1 = require("@/components/Footer");
var login_1 = require("@/services/login");
var react_cookies_1 = require("react-cookies");
var index_less_1 = require("./index.less");
var LoginMessage = function (_a) {
    var content = _a.content;
    return (react_1["default"].createElement(antd_1.Alert, { style: {
            marginBottom: 24
        }, message: content, type: "error", showIcon: true }));
};
/**
 * 此方法会跳转到 redirect 参数所在的位置
 */
var goto = function () {
    var query = umi_1.history.location.query;
    var redirect = query.redirect;
    window.location.href = redirect || '/';
};
// eslint-disable-next-line @typescript-eslint/ban-types
var Login = function () {
    var _a = react_1.useState(false), submitting = _a[0], setSubmitting = _a[1];
    var _b = react_1.useState({}), userLoginState = _b[0], setUserLoginState = _b[1];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _c = react_1.useState('account'), type = _c[0], setType = _c[1];
    var intl = umi_1.useIntl();
    var handleSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var msg, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, login_1.fakeAccountLogin(__assign({}, values))];
                case 2:
                    msg = _a.sent();
                    if (msg.status === 'ok') {
                        react_cookies_1["default"].save('access_token', msg.token, {
                            maxAge: msg.token_time
                        });
                        react_cookies_1["default"].save('username', msg.name, {
                            maxAge: msg.token_time
                        });
                        console.log(msg.name);
                        antd_1.message.success('登录成功！');
                        goto();
                        return [2 /*return*/];
                    }
                    // 如果失败去设置用户错误信息
                    setUserLoginState(msg);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    antd_1.message.error('登录失败，请重试！');
                    return [3 /*break*/, 4];
                case 4:
                    setSubmitting(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var status = userLoginState.status, loginType = userLoginState.type;
    return (react_1["default"].createElement("div", { className: index_less_1["default"].container },
        react_1["default"].createElement("div", { className: index_less_1["default"].content },
            react_1["default"].createElement("div", { className: index_less_1["default"].top },
                react_1["default"].createElement("div", { className: index_less_1["default"].header },
                    react_1["default"].createElement(umi_1.Link, { to: "/" },
                        react_1["default"].createElement("img", { alt: "logo", className: index_less_1["default"].logo, src: "/logo.png" }),
                        react_1["default"].createElement("span", { className: index_less_1["default"].title }, "AnA ERP"))),
                react_1["default"].createElement("div", { className: index_less_1["default"].desc }, "\u672C\u5206\u652F \u57FA\u4E8EAnA Backend")),
            react_1["default"].createElement("div", { className: index_less_1["default"].main },
                react_1["default"].createElement(pro_form_1["default"], { initialValues: {
                        autoLogin: false
                    }, submitter: {
                        searchConfig: {
                            submitText: intl.formatMessage({
                                id: 'pages.login.submit',
                                defaultMessage: '登录'
                            })
                        },
                        render: function (_, dom) { return dom.pop(); },
                        submitButtonProps: {
                            loading: submitting,
                            size: 'large',
                            style: {
                                width: '100%'
                            }
                        }
                    }, onFinish: function (values) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            handleSubmit(values);
                            return [2 /*return*/];
                        });
                    }); } },
                    status === 'error' && loginType === 'account' && (react_1["default"].createElement(LoginMessage, { content: intl.formatMessage({
                            id: 'pages.login.accountLogin.errorMessage',
                            defaultMessage: '账户或密码错误（admin/ant.design)'
                        }) })),
                    type === 'account' && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(pro_form_1.ProFormText, { name: "username", fieldProps: {
                                size: 'large',
                                prefix: react_1["default"].createElement(icons_1.UserOutlined, { className: index_less_1["default"].prefixIcon })
                            }, placeholder: intl.formatMessage({
                                id: 'pages.login.username.placeholder',
                                defaultMessage: '用户名:'
                            }), rules: [
                                {
                                    required: true,
                                    message: (react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.username.required", defaultMessage: "\u8BF7\u8F93\u5165\u7528\u6237\u540D!" }))
                                },
                            ] }),
                        react_1["default"].createElement(pro_form_1.ProFormText.Password, { name: "password", fieldProps: {
                                size: 'large',
                                prefix: react_1["default"].createElement(icons_1.LockTwoTone, { className: index_less_1["default"].prefixIcon })
                            }, placeholder: intl.formatMessage({
                                id: 'pages.login.password.placeholder',
                                defaultMessage: '密码: '
                            }), rules: [
                                {
                                    required: true,
                                    message: (react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.password.required", defaultMessage: "\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01" }))
                                },
                            ] }))),
                    react_1["default"].createElement("div", { style: {
                            marginBottom: 24
                        } },
                        react_1["default"].createElement(pro_form_1.ProFormCheckbox, { noStyle: true, name: "autoLogin" },
                            react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.rememberMe", defaultMessage: "\u81EA\u52A8\u767B\u5F55" })),
                        react_1["default"].createElement("a", { style: {
                                float: 'right'
                            }, href: "/user/userregister" },
                            react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.forgotPassword", defaultMessage: "\u6CE8\u518C" })))),
                react_1["default"].createElement(antd_1.Space, { className: index_less_1["default"].other }))),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = Login;
