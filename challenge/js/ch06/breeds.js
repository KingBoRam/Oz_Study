// DOG api에 강아지를 한번에 원하는 만큼 가져올수 있게 하는 url이 따로 있음. + 모든 견종정보리스트도 받을수 있음
const apiRandomDogs = 'https://dog.ceo/api/breeds/image/random/3';
const apiAllBreeds = 'https://dog.ceo/api/breeds/list/all';
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

// 왜 어떤건 class고 어떤건 id고 둘다있는것도있고 그렇지? 라고 생각했는데 의도적으로 js에서 불러와야 하는 값은 id를 주셨다고 한다. (그게 맞는거같다 내가 조작할것을 고유한 id값을 주는게 더 편리할듯)
const header = document.getElementById('header');
const main = document.getElementById('main');
const input = document.getElementById('filter-text');
const button = document.getElementById('filter-button');
const select = document.getElementById('filter-select');
const more = document.getElementById('more');
const tothetop = document.getElementById('tothetop');
const resetBtn = document.getElementById('reset');

// 강아지를 담아둘 배열
let currentDogs = [];

// 겹치는 함수
function displayDogs(item) {
  const dogImgDiv = document.createElement('div');
  dogImgDiv.classList.add('flex-item');
  dogImgDiv.innerHTML = `<img src=${item} />`;
  main.append(dogImgDiv);
}

// 웹페이지가 로드됐을 때 이벤트 추가
window.addEventListener('load', function () {
  //강아지 사진 뿌리기
  request1.open('get', apiRandomDogs);
  // 위의 로드와는 다른 로드임을 기억할 것
  request1.addEventListener(
    'load',
    function () {
      const response = JSON.parse(request1.response);
      response.message.forEach(function (item) {
        currentDogs.push(item);
        displayDogs(item);
      });
    },
    { once: true },
  );
  request1.send();

  // 셀렉트에 견종 정보 뿌리기
  request2.open('get', apiAllBreeds);
  request2.addEventListener('load', function () {
    const response = JSON.parse(request2.response);
    // 이때 견종정보는 key로 오기 때문에 key를 가져오는 방법을 알아야함. 아래처럼 쓰면 key를모아 배열로 반환.
    Object.keys(response.message).forEach(function (item) {
      const option = document.createElement('option');
      option.textContent = item;
      option.value = item;
      select.append(option);
    });
  });
  request2.send();
});

button.addEventListener('click', function () {
  main.innerHTML = '';
  let filteredDogs = currentDogs.filter(function (item) {
    // input에 값이 없으면 0을 반환하고 모든항목이 반환됨.
    return item.indexOf(input.value) !== -1;
  });

  input.value = '';

  filteredDogs.forEach(function (item) {
    displayDogs(item);
  });
});

select.addEventListener('change', function () {
  main.innerHTML = '';
  let filteredDogs = currentDogs.filter(function (item) {
    // 태그 처음에 기입할때 all에 밸류를 비워둠. 빈밸류는 위와마찬가지로 0이니까 전부다 반환됨.
    return item.indexOf(select.value) !== -1;
  });

  input.value = '';

  filteredDogs.forEach(function (item) {
    displayDogs(item);
  });
});

// more.addEventListener('click', function () {
//   request1.open('get', apiRandomDogs);
//   request1.addEventListener(
//     'load',
//     function () {
//       const response = JSON.parse(request1.response);
//       response.message.forEach(function (item) {
//         currentDogs.push(item);
//         displayDogs(item);
//       });
//     },
//     { once: true },
//   );
//   request1.send();
// });

tothetop.addEventListener('click', function () {
  // scrollTo : 주어진 위치로 스크롤을 이동시킴(y축값, 위치는 객체리터럴로) 특정위치로 이동시키는 연습 해보면 좋을 것 같다. + 부드럽게 움직이게 css추가
  window.scrollTo({ top: 0 });
});

// 셀렉트 옆에 버튼 추가 리셋 42마리 새롭게 요청 기존강아지 없어지고 새로운강아지.
resetBtn.addEventListener('click', function () {
  main.innerHTML = '';
  request1.open('get', apiRandomDogs);
  request1.addEventListener(
    'load',
    function () {
      const response = JSON.parse(request1.response);
      response.message.forEach(function (item) {
        currentDogs.push(item);
        displayDogs(item);
      });
    },
    // { once: true },
  );
  request1.send();
  window.scrollTo({ top: 0 });
});
