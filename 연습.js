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

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * radius;
  };
}

const circle1 = new Circle(5);
