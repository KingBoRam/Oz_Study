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

// function testExplicit(num) {
//   return String(num);
// }
// function testExplicit2(num) {
//   return num.toString();
// }
// function testInplicit(num) {
//   return num + '';
// }
// function repeat(num) {
//   let i = 0;
//   while (i < 1000) {
//     testExplicit(num);
//     i++;
//   }
// }

// // console.time('반복');
// // repeat(123);
// // console.timeEnd('반복');

// // console.log(+['10', 20][0]);

// console.log(typeof testExplicit2(123));

// const text = {
//   a: '1',
// };

// console.log(text.b);
const symbol1 = Symbol('hello');
const symbol2 = Symbol('hello');
console.log(symbol1 == symbol2);
