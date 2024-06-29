"use strict";
// <T> 어떤 글자든 상관 없음
// function genericFunction<T>(arg: T): T {
//   return arg;
// }
// interface GenericInterface<T> {}
// class GenericClass<T> {}
let numbers = [1, 2, 3];
let strings = ["1", "2", "3"];
let div = document.querySelector("#myDiv1");
div === null || div === void 0 ? void 0 : div.innerHTML;
let div2 = document.querySelector("#myDiv2");
div === null || div === void 0 ? void 0 : div.innerHTML;
// let button = document.querySelector<HTMLButtonElement>("#myButton1");
function getFirstNumberElement(arr) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
// const firstNumber = getFirstNumberElement(numbers);
function getFirstStringElement(arr) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
// const firstString = getFirstStringElement(strings);
function getFirstElement(arr) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
let entry = {
    key: "age",
    value: 30,
};
let entry2 = {
    key: 1,
    value: ["red"],
};
let strObj = {
    name: "Elliot",
};
let numObj = {
    age: 30,
};
