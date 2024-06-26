const apiRandomDogs = 'https://dog.ceo/api/breeds/image/random/3';
const apiAllBreeds = 'https://dog.ceo/api/breeds/list/all';
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
  axios.get(apiRandomDogs).then((res) => {
    res.data.message.forEach(function (item) {
      currentDogs.push(item);
      displayDogs(item);
    });
  });

  axios.get(apiAllBreeds).then((res) => {
    Object.keys(res.data.message).forEach(function (item) {
      const option = document.createElement('option');
      option.textContent = item;
      option.value = item;
      select.append(option);
    });
  });
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

more.addEventListener('click', function () {
  const moreData = async function () {
    try {
      const res = await axios.get(apiRandomDogs);
      res.data.message.forEach(function (item) {
        currentDogs.push(item);
        displayDogs(item);
      });
    } catch (error) {
      console.log('err : ' + err);
    }
  };
  moreData();
});

tothetop.addEventListener('click', function () {
  // scrollTo : 주어진 위치로 스크롤을 이동시킴(y축값, 위치는 객체리터럴로) 특정위치로 이동시키는 연습 해보면 좋을 것 같다. + 부드럽게 움직이게 css추가
  window.scrollTo({ top: 0 });
});

// 셀렉트 옆에 버튼 추가 리셋 42마리 새롭게 요청 기존강아지 없어지고 새로운강아지.
resetBtn.addEventListener('click', function () {
  main.innerHTML = '';
  axios(apiRandomDogs).then((res) => {
    res.data.message.forEach(function (item) {
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  window.scrollTo({ top: 0 });
});
