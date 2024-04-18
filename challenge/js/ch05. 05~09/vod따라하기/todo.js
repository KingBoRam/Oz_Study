const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
//로컬스토리지에 저장할 배열
let todoArr = [];

// 로컬스토리지 저장하기
function saveTodos() {
  const todoString = JSON.stringify(todoArr);
  localStorage.setItem('Todos', todoString);
}

// 로컬스토리지 불러오기
function loadTodos() {
  const todos = localStorage.getItem('Todos');
  if (todos !== null) {
    todoArr = JSON.parse(todos);
    displayTodos();
  }
}
loadTodos();

//할일삭제하기
function handleTodoDelBtnClick(clickedId) {
  todoArr = todoArr.filter(function (aTodo) {
    return aTodo.todoId !== clickedId;
  });
  displayTodos();
  saveTodos();
}

// 기능추가
function handleTodoItemClick(clickedId) {
  todoArr = todoArr.map(function (aTodo) {
    if (aTodo.todoId === clickedId) {
      return {
        ...aTodo,
        todoDone: !aTodo.todoDone,
      };
    } else {
      return aTodo;
    }
  });
  // 값이 바뀔때마다 화면에 보여주는걸 전체적으로 다시만듬.
  displayTodos();
  saveTodos();
}

// 보여주기
function displayTodos() {
  todoList.innerHTML = '';
  todoArr.forEach(function (aTodo) {
    const todoItem = document.createElement('li');
    todoItem.textContent = aTodo.todoText;
    todoItem.title = '클릭하면 완료됨';
    if (aTodo.todoDone) {
      todoItem.classList.add('done');
    } else {
      todoItem.classList.add('yet');
    }
    todoItem.addEventListener('click', function () {
      handleTodoItemClick(aTodo.todoId);
      console.log(aTodo.todoDone);
    });
    const todoDelBtn = document.createElement('span');
    todoDelBtn.textContent = 'x';
    todoItem.title = '클릭하면 삭제됨';
    todoDelBtn.addEventListener('click', function () {
      handleTodoDelBtnClick(aTodo.todoId);
    });
    todoItem.appendChild(todoDelBtn);
    todoList.append(todoItem);
  });
}

// 추가하기
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false,
  };
  todoArr.push(toBeAdded);
  todoForm.todo.value = '';
  displayTodos();
  saveTodos();
});
