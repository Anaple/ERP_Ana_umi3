"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var react_1 = require("react");
var umi_1 = require("umi");
var NoFoundPage = function () { return (react_1["default"].createElement(antd_1.Result, { status: "404", title: "404", subTitle: "\u4F60\u6CA1\u6709\u6B64\u9875\u9762.", extra: react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: function () { return umi_1.history.push('/'); } }, "Back Home") })); };
exports["default"] = NoFoundPage;
