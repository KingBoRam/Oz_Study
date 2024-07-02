"use strict";
// console.log("hello");
// console.print("hello");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
let max = lodash_1.default.max([3, 5, 7, 1, 2, 6, 2]);
console.log(max);
let shuffledArray = lodash_1.default.shuffle([12, 3, 5, 1, 6]);
console.log(shuffledArray);
