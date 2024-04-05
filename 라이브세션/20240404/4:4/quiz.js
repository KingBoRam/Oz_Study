// 1. 출석 체크하기
// const 출석부 = [
//   '철수',
//   '영희',
//   '진수',
//   '미애',
//   '수지',
//   '은우',
//   '고은',
//   '도현',
//   '지민',
//   '지수',
// ];
// const 교실 = 출석부.filter(() => Math.random() < 0.7);
// let count = 0;
// for (let i = 1; i <= 출석부.length; i++) {
//   console.log(`교수님 : ${i}번, ${출석부[i - 1]}학생 왔나요?`);
//   if (교실.includes(출석부[i - 1])) {
//     console.log(`${출석부[i - 1]} : 넹`);
//   } else {
//     console.log(`교수님 : 없군`);
//   }
// }

// 2. 사과 갯수 세보기
// let 사과박스 = new Array(Math.floor(Math.random() * 100)).fill('🍎');
// const 정답 = 사과박스.length;
// let count = 0;
// while (사과박스.length !== 0) {
//   count++;
//   사과박스.pop();
// }
// console.log(count);
// console.log(정답);

// 3. 1부터 n까지 더하기
// const num = 10;
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//   sum += i;
// }
// console.log(sum);

// 4. 모음 개수 세기
// const 모음 = ['a', 'i', 'u', 'e', 'o'];
// const str = 'hello world';
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (모음.includes(str[i])) {
//     count++;
//   }
// }
// console.log(count);

// 5. 구구단 찍기
// for (let i = 2; i <= 9; i++) {
//   for (let j = 2; j <= 9; j++) {
//     console.log(`${i}x${j} = ${i * j}`);
//   }
// }

// 6. 배열 & 객체 다루기
// const 회원목록 = [
//   { 회원번호: 0, 성별: '남', 나이: 16 },
//   { 회원번호: 1, 성별: '여', 나이: 18 },
//   { 회원번호: 2, 성별: '남', 나이: 21 },
//   { 회원번호: 3, 성별: '여', 나이: 25 },
//   { 회원번호: 4, 성별: '여', 나이: 29 },
//   { 회원번호: 5, 성별: '여', 나이: 30 },
//   { 회원번호: 6, 성별: '남', 나이: 31 },
//   { 회원번호: 7, 성별: '여', 나이: 37 },
//   { 회원번호: 8, 성별: '여', 나이: 39 },
//   { 회원번호: 9, 성별: '남', 나이: 41 },
//   { 회원번호: 10, 성별: '여', 나이: 45 },
//   { 회원번호: 11, 성별: '남', 나이: 48 },
//   { 회원번호: 12, 성별: '남', 나이: 51 },
//   { 회원번호: 12, 성별: '남', 나이: 61 },
//   { 회원번호: 12, 성별: '남', 나이: 71 },
// ];

// // 6-1. 남성 여성 회원 수 세기
// let male = 0;
// let female = 0;
// for (let i = 0; i < 회원목록.length; i++) {
//   if (회원목록[i].성별 === '남') {
//     male++;
//   } else {
//     female++;
//   }
// }
// console.log(male, female);
// // 6-2. 평균 나이 구하기
// let sum = 0;
// for (let i = 0; i < 회원목록.length; i++) {
//   sum += 회원목록[i].나이;
// }
// console.log(sum / 회원목록.length);
// // 6-3. 가장 어린 나이, 가장 많은 나이 구하기
// let average = 37.5;
// let minAge = average;
// let maxAge = average;
// for (let i = 0; i < 회원목록.length; i++) {
//   if (회원목록[i].나이 > minAge) {
//     minAge = 회원목록[i].나이;
//   }
//   if (회원목록[i].나이 < maxAge) {
//     maxAge = 회원목록[i].나이;
//   }
// }
// console.log(minAge, maxAge);
// // 6-4. 나이대 별로 회원 수 세기
// // 객체로 정리하기
// let obj = {};
// for (let i = 0; i < 회원목록.length; i++) {
//   let age = Math.floor(회원목록[i].나이 * 0.1) * 10 + '대';
//   if (age in obj) {
//     obj[age] += 1;
//   } else {
//     obj[age] = 1;
//   }
// }
// console.log(obj);

// 7. 사과 박스 곰팡이 검사하기
// const 곰팡이 = '🦠';
// //곰팡이가 생길 수도 있고 안 생길 수도 있는 코드
// 사과박스 = new Array(Math.floor(Math.random() * 100)).fill('🍎');
// Math.random() < 0.5
//   ? (사과박스[Math.floor(Math.random() * 사과박스.length)] = 곰팡이)
//   : '';
// let exist = 0;

// for (let i = 0; i < 사과박스.length; i++) {
//   if (사과박스[i] === 곰팡이) {
//     exist++;
//   }
// }
// exist > 0 ? console.log('곰팽이폈네') : console.log('곰팽이없네');

// 8. 몬스터 잡기
// 명중률이 있음
// 몬스터가 나도 때림
const player = {
  체력: 100,
  공격력: 12,
  명중률: 80,
};

const monster = {
  체력: 60,
  공격력: 22,
  명중률: 70,
};

while (player.체력 > 0 && monster.체력 > 0) {
  let num = Math.random() * 100;

  console.log('플레이어가 공격합니다.');
  if (num < player.명중률) {
    console.log('플레이어의 공격이 적중 했습니다!');
    monster.체력 -= player.공격력;
    if (monster.체력 < 0) {
      monster.체력 = 0;
    }
    console.log(`몬스터의 체력 : ${monster.체력}`);
  } else {
    console.log('miss');
  }
  console.log('------------------');
  if (monster.체력 > 0) {
    console.log('몬스터가 공격합니다.');
    if (num < monster.명중률) {
      console.log('몬스터의 공격이 적중 했습니다.');
      player.체력 -= monster.공격력;
      if (player.체력 < 0) {
        player.체력 = 0;
      }
      console.log(`플레이어의 체력 : ${player.체력}`);
    } else {
      console.log('miss');
    }
    console.log('------------------');
  }
}
console.log(
  monster.체력 === 0
    ? '플레이어가 승리하였습니다.'
    : '몬스터가 승리하였습니다.',
);
