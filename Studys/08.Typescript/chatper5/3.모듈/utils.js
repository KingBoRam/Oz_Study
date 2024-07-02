"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.appName = void 0;
exports.log = log;
function log(message) {
    console.log(message);
}
exports.appName = "demo";
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
