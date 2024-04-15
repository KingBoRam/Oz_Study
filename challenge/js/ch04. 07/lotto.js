// 요소를 싹 선택하는것 먼저
const todaySpan = document.querySelector('#today');
const numbersDiv = document.querySelector('.numbers');
const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');

// 화면에 번호를 띄울 함수
function paintNumber(number) {
  const eachNumberDiv = document.createElement('div');
  eachNumberDiv.classList.add('eachnum');
  eachNumberDiv.textContent = number;
  if (number >= 1 && number <= 10) {
    eachNumberDiv.style.backgroundColor = 'red';
  } else if (number > 10 && number <= 20) {
    eachNumberDiv.style.backgroundColor = 'orange';
  } else if (number > 20 && number <= 30) {
    eachNumberDiv.style.backgroundColor = 'green';
  } else {
    eachNumberDiv.style.backgroundColor = 'blue';
  }
  numbersDiv.append(eachNumberDiv);
}

// 로또 번호 생성
let lottoNumbers = [];
// 1~45의 랜덤숫자 6개
drawButton.addEventListener('click', function () {
  if (lottoNumbers.length === 6) {
    numbersDiv.innerHTML = '';
    lottoNumbers = [];
  }
  while (lottoNumbers.length < 6) {
    let rn = Math.floor(Math.random() * 45) + 1;
    // 로또니까 번호가 중첩되면 안됨
    if (lottoNumbers.indexOf(rn) === -1) {
      lottoNumbers.push(rn);
      // 그냥 함수 써서 바로바로 div에 숫자를 넣을꺼면 배열이 왜 필요할까 생각해봤는데 그렇게하면 숫자 6개가 다 만들어졌을 때
      // div의 갯수를 세어야 하는데 상위요소의 자식요소가 몇개인지 세는 등의 복잡한 과정이 추가될 것 같다. 그러지 않고 배열을 이용하면
      // 여기서 한 것 처럼 간단하게 할 수 있다.
      paintNumber(rn);
    }
  }
});

// 로또 번호 삭제
resetButton.addEventListener('click', function () {
  lottoNumbers.splice(0, 6);
  // lottoNumbers = []; 이건 lottoNumbers가 let일때만되고 위에는 const일때도 됨
  numbersDiv.innerHTML = '';
});

// 오늘의 날짜 표시
// 오늘자의 정보를 빌트인 생성자를 이용해서 담고
const today = new Date();
// 그 정보에서 필요한것만 메소드로 뽑아냄.
let year = today.getFullYear();
// 0부터 월을 세기때문에 +1 해줘야 실제 월과 맞음
let month = today.getMonth() + 1;
let day = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${day}일 `;

// 과제 추첨을 한번 더 눌렀을 때 새로운 번호 나오기. -완-
