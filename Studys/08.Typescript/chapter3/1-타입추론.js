"use strict";
// 타입추론
// 변수
let myNumber = 5;
let myString = "hello";
let myBool = true;
// myNumber = '5'
// 함수 반환 타입
// 함수를 사용 할 때 햄수 내부에서 진행되는 연산 작업을 기반으로 컴파일러가 반환값을 추론한다.
// function add(x: number, y: number) {
//   return `${x}${y}`;
// }
// const n = add(1, 1);
// 배열 & 객체
let nums = [1, 2, 3, 4, 5];
// nums.push('hello')
let user = { name: "sam", age: 30 };
// user.age = '30'
let mixedValues = [1, 2, 3, "red", "green", "blue"];
