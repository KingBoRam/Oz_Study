// 1. 간단한 퀴즈 만들기
// const userAnswer = prompt('1+1은?');
// const answer = '2';
// if (userAnswer === answer) {
//   alert('정답입니다.');
// } else {
//   alert('오답입니다.');
// }

// switch (userAnswer === answer) {
//   case true:
//     alert('정답');
//     break;
//   default:
//     alert('오답');
// }

// userAnswer === answer ? alert('정답') : alert('오답');

// const result = userAnswer === answer ? '정답' : '오답';
// alert(result);

// 2. 짝수여부판단하기
// const number = prompt('숫자를 입력해주세요');
// if (number % 2 === 0) {
//   alert('짝수입니다');
// } else {
//   alert('홀수입니다');
// }
// 0->falsy 이라서 아래는 홀수입니다가 뜸. 그래서 의도대로 하려면 위아래를 바꿔야함.
// 혹은 조건 앞에 느낌표를 붙이던가. 근데 느낌표붙일때 !(number%2)라고 써야함
// if (number % 2 ) {
//   alert('짝수입니다');
// } else {
//   alert('홀수입니다');
// }
// 3. 짝수이면서 3의배수인지 판단하기 = 짝수 && 3으로 나눴을때 0
// const number = prompt('숫자를 입력하세요.');
// if (number % 2 === 0 && number % 3 === 0) {
//   console.log('true');
// } else {
//   console.log('false');
// }
// 4. 빈배열인지 확인하기 undefined를 넣으면 어케대징? 넣어보니까 아님이 뜸. 언디파인드는 진짜 어렵네.
// const arr = [undefined];
// if (arr.length === 0) {
//   alert('빈 배열');
// } else {
//   alert('아님');
// }
// 5. 성인인지 확인하기
// const age = Number(prompt('나이를 입력하시오'));
// if (age >= 18) {
//   alert('성인');
// } else {
//   alert('미성년');
// }
//
// 6. 로그인하기
// const id = 'hello';
// const pwd = 'world';
// const userId = prompt('아이디쓰슈');
// const userPwd = prompt('비번쓰슈');
// if (userId === id) {
//   if (userPwd === pwd) {
//     alert('잘왔슈');
//   } else {
//     alert('비번틀렸슈');
//   }
// } else {
//   alert('아이디틀렸슈');
// }
//
// 7. 입력된 달은 어떤 계절인지 알려주기
// 봄345 여름678 가을91011 겨울1212
// const month = Number(prompt('월을 입력하시오'));
// if (month < 1 || month > 12) {
//   alert('1에서 12사이에 값을 입력해주세요.');
// } else if (month >= 3 && month <= 5) {
//   alert('봄');
// } else if (month >= 6 && month <= 8) {
//   alert('여름');
// } else if (month >= 9 && month <= 11) {
//   alert('가을');
// } else {
//   alert('겨울');
// }
// month < 1 || month > 12
//   ? alert('1에서 12사이에 값을 입력해주세요.')
//   : month >= 3 && month <= 5
//     ? alert('봄')
//     : month >= 6 && month <= 8
//       ? alert('여름')
//       : month >= 9 && month <= 11
//         ? alert('가을')
//         : alert('겨울');

// 9. 퀴즈 풀어서 몇개 맞췄는지 알려주기.
// const answer1 = 'HTML';
// const answer2 = 'CSS';
// const answer3 = 'JS';

// const userAnswer1 = prompt('html');
// const userAnswer2 = prompt('css');
// const userAnswer3 = prompt('js');

// let count = 0;

// switch (true) {
//   case answer1 === userAnswer1:
//     count += 1;
//   case answer2 === userAnswer2:
//     count += 1;
//   case answer3 === userAnswer3:
//     count += 1;
// }
// console.log(count);
// // 10. 퀴즈로 학점 내리기
// if (count === 3) {
//   alert('A');
// } else if (count === 2) {
//   alert('B');
// } else {
//   alert('C');
// }
const num = 0;
switch (true) {
  case num === 0:
    console.log('num이 0과 같습니다.');
    break;
  case num < 0:
    console.log('num이 0보다 작습니다.');
    break;
  default:
    console.log('조건식이 모두 거짓입니다.');
}
const i = 1;
if (i) {
  console.log(i);
}
