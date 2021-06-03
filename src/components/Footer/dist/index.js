"use strict";
exports.__esModule = true;
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var pro_layout_1 = require("@ant-design/pro-layout");
exports["default"] = (function () { return (react_1["default"].createElement(pro_layout_1.DefaultFooter, { copyright: "2021 Anaple", links: [
        {
            key: 'AnA ERP',
            title: 'AnA ERP',
            href: 'https://github.com/',
            blankTarget: true
        },
        {
            key: 'github',
            title: react_1["default"].createElement(icons_1.GithubOutlined, null),
            href: 'https://github.com/ant-design/ant-design-pro',
            blankTarget: true
        },
        {
            key: 'Ant Design Pro',
            title: 'Ant Design',
            href: 'https://ant.design',
            blankTarget: true
        },
    ] })); });
