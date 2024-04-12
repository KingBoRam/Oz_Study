/*
기본 요구사항
- 
1. ‘햄버거 주문서’ 를 클릭하면 `classList.toggle()` 메서드를 통해 ‘추가’, ‘제거’ 버튼이 토글 됩니다.
2. 햄버거 아이템 리스트 배열을 생성해줍니다. 
3. 추가 버튼을 클릭하면 배열 리스트 1개가 추가 됩니다.
4. 이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다. 
5. 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다.
6. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
7. 스타일은 마음껏 수정해도 좋습니다.
*/

// 아이템 리스트 배열
/*
TODO:햄버거 아이템 리스트 배열을 생성해줍니다. 
*/
const items = [];
const todo = document.querySelector('.todo');
const todoMenu = document.createElement('li');
todoMenu.classList.add('todoMenu');
todoMenu.textContent = `현재 주문한 햄버거 갯수 : ${items.length}개`;
todo.append(todoMenu);

// 아이템 추가 버튼 클릭 시 호출되는 함수
function addItem() {
  /*
	TODO:추가 버튼을 클릭하면 배열 리스트 1개가 추가 됩니다.
	이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다. 
	*/
  let count = items.length + 1;
  const item = `마싯는 햄버거 ${count}`;
  items.push(item);
  renderItems();
  todoMenu.textContent = `현재 주문한 햄버거 갯수 : ${count}개`;
}

// 아이템 제거 버튼 클릭 시 호출되는 함수
function removeItem() {
  /*
TODO: 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다.
*/
  items.pop();
  renderItems();
  let count = items.length + 1;
  todoMenu.textContent = `현재 주문한 햄버거 갯수 : ${count - 1}개`;
}

// 아이템 리스트 렌더링 함수
function renderItems() {
  /*
TODO: 아이템 리스트 초기화하는 함수를 만들어주세요.
초기화가 없으면 1개 뒤에 2개 3개뒤에 3개 이런식으로 추가됨. 즉 누를 때 마다 배열이 완전히 새로 랜더링되는것
*/
  const itemsList = document.querySelector('#itemList');
  itemsList.innerHTML = '';
  items.forEach((item) => {
    /*
    TODO: 배열의 각 아이템을 순회하며 리스트에 추가하는 함수를 만들어주세요.
      */
    const li = document.createElement('li');
    li.textContent = item;
    itemsList.append(li);
  });
}

//title '햄버거 주문서' 클릭 시 classList.toggle()메서드 실행
const title = document.getElementById('title');
title.addEventListener('click', function () {
  /*
TODO: style.css 파일의 .show class를 이용하여 토글 기능을 만들어주세요!
*/
  const addButton = document.querySelector('#addButton');
  const removeButton = document.querySelector('#removeButton');
  addButton.classList.toggle('show');
  removeButton.classList.toggle('show');
});

// 아이템 추가 및 제거 버튼 이벤트 핸들러
document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('removeButton').addEventListener('click', removeItem);

// nav와 a 활용
const a = document.querySelectorAll('a');
const currntPageURL = window.location.href;
console.log(currntPageURL);
for (let i = 0; i < a.length; i++) {
  let href = a[i].href;
  console.log(href);
  if (href === currntPageURL) {
    a[i].setAttribute('aria-current', 'page');
  }
}
