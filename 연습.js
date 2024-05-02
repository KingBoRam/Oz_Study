function 작업1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('hello');
    }, 1000);
  });
}
function 작업2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('world');
    }, 1000);
  });
}
function 작업3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('oz');
    }, 1000);
  });
}
function 작업4() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('school');
    }, 1000);
  });
}

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

async function 함수() {
  const str1 = await 작업1();
  console.log(str1);
  const str2 = await 작업2();
  console.log(str2);
  const str3 = await 작업3();
  console.log(str3);
  const str4 = await 작업4();
  console.log(str4);
  console.log('작업끝');
}
함수();
