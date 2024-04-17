const todoUl = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
// 리스트를 담을 배열
let todos = [];
const todokey = 'todos';

// 제출하면 배열에 담기.
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const text = todoForm.todotext.value;
  const todoObj = {
    text,
    id: new Date().getTime(),
    done: false,
  };
  todos.push(todoObj);
  todoForm.todotext.value = '';
  displayList();
  saveLocal();
});

// 화면에 띄우기
function displayList() {
  todoUl.innerHTML = '';
  todos.forEach(function (item) {
    const todoLi = document.createElement('li');
    todoLi.textContent = item.text;
    if (item.done) {
      todoLi.classList.add('done');
    } else {
      todoLi.classList.add('yet');
    }
    todoLi.addEventListener('click', function () {
      chageColor(item.id);
    });
    const delBtn = document.createElement('button');
    delBtn.textContent = 'x';
    delBtn.addEventListener('click', function () {
      deleteList(item.id);
    });

    todoLi.appendChild(delBtn);
    todoUl.append(todoLi);
  });
}

// 리스트 누르면 색깔변경
function chageColor(itemId) {
  todos = todos.map(function (item) {
    if (item.id === itemId) {
      return { ...item, done: !item.done };
    } else {
      return item;
    }
  });
  displayList();
  saveLocal();
}

// 리스트 삭제
function deleteList(itemId) {
  todos = todos.filter(function (item) {
    return item.id !== itemId;
  });
  displayList();
  saveLocal();
}

// 로컬스토리지 저장
function saveLocal() {
  localStorage.setItem(todokey, JSON.stringify(todos));
}

// 로컬스토리지 불러오기
function loadLocal() {
  todos = JSON.parse(localStorage.getItem(todokey));
  displayList();
}
loadLocal();
