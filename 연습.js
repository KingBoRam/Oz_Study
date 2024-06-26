// function 작업1() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('hello');
//     }, 1000);
//   });
// }
// function 작업2() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('world');
//     }, 1000);
//   });
// }
// function 작업3() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('oz');
//     }, 1000);
//   });
// }
// function 작업4() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('school');
//     }, 1000);
//   });
// }

// 작업1()
//   .then((res) => {
//     console.log(res);
//     return (result = 작업2());
//   })
//   .then((result) => {
//     console.log(result);
//     return (result = 작업3());
//   })
//   .then((result) => {
//     console.log(result);
//     return (result = 작업4());
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .finally(() => {
//     console.log('작업끝');
//   });

// async function 함수() {
//   const str1 = await 작업1();
//   console.log(str1);
//   const str2 = await 작업2();
//   console.log(str2);
//   const str3 = await 작업3();
//   console.log(str3);
//   const str4 = await 작업4();
//   console.log(str4);
//   console.log('작업끝');
// }
// 함수();

// fetch('https://dog.ceo/api/breeds/image/random')
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error('400 or 500');
//     }
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log('err 발생 : ' + err);
//   });

// async function trans() {
//   const jsonRes = await fetch('https://dog.ceo/api/breeds/image/random');
//   const res = await jsonRes.json();
//   console.log(res);
// }
// axios
//   .get('https://dog.ceo/api/breeds/image/random')
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log('err 발생 : ' + err);
//   });

// function repeat(fn, num) {
//   let i = 0;
//   if (fn === 'ex') {
//     while (i < 10000) {
//       String(num);
//       i++;
//     }
//   } else if (fn === 'in') {
//     while (i < 10000) {
//       num + '';
//       i++;
//     }
//   }
// }

// console.time('반복');
// repeat('in', 1000);
// console.timeEnd('반복');
// function repeat(fn, num) {
//   let i = 0;
//   console.time('반복' + fn);
//   if (fn === 'ex') {
//     while (i < 10000) {
//       String(num);
//       i++;
//     }
//   } else if (fn === 'ex2') {
//     while (i < 10000) {
//       num.toString();
//       i++;
//     }
//   } else if (fn === 'in') {
//     while (i < 10000) {
//       num + '';
//       i++;
//     }
//   }
//   console.timeEnd('반복' + fn);
// }

// repeat('ex', 1000);
// repeat('ex2', 1000);
// repeat('in', 1000);

// function count(n) {
//   if (n < 0) return;
//   console.log(n);
//   count(n - 1);
// }
// count(10);

// function Circle(radius) {
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * radius;
//   };
// }

// const circle1 = new Circle(5);

// console.log(circle1);

// const circle3 = Circle(15);
// console.log(circle3);
// console.log(global.radius);

// function foo() {
//   console.log(this);
// }

// const obj = { foo };

// function foo() {}

// console.log(foo());

// console.log(new foo());

// const numObj = new Number(123);
// console.log(numObj);

// const foo = function () {
//   console.log(this);
// };
// foo();

// function Circle(radius) {
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * radius;
//   };
// }

// const circle1 = new Circle(5);

// const count = useSelector((state) => {
//   console.log(state);
//   return state.value;
// });
// const 실행컨텍스트 = {
//   "렉시컬 환경": {
//     "환경 레코드(변수관리)": {
//       "객체 환경 레코드(var)": {
//         'BindingObject': {
//           x: undefined,
//           foo : <funtion object>,
//         }
//       },
//       "선언적 환경 레코드(let, const)": {
//         y : <uninitialized>,
//       },
//       "this 바인딩": [[GlobalThisValue]],
//     },
//     "외부 환경에 대한 참조(상위스코프)": null,
//   },
// };

// var x = 1;
// const y = 2;
// function foo(a) {
//   var x = 3;
//   const y = 4;
//   function bar(b) {
//     const z = 5;
//     console.log(a + b + x + y + z);
//   }
//   bar(10);
// }
// foo(20);
// console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
const numbers = [1, 2, , 3];
console.log(typeof numbers.length);
// const results = numbers.map((item) => item + 1);
// console.log(results);
// const res = [1, 10, 2, 25].sort((a, b) => b - a);
// console.log(res);
// const arr = [0];
// arr[1] = 1;
// console.log(arr); // [0, 1]
// arr[3] = 4;
// console.log(arr);
