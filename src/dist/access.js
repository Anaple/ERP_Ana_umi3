"use strict";
exports.__esModule = true;
// src/access.ts
function access(initialState) {
    var currentUser = (initialState || {}).currentUser;
    return {
        canAdmin: currentUser && currentUser.access === 'admin',
        canManager: currentUser && currentUser.access === 'manager' || currentUser && currentUser.access === 'admin'
    };
}
exports["default"] = access;
