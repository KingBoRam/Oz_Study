const input = document.getElementById('todo-input');
const btn = document.getElementById('add-btn');
const ul = document.getElementById('todo-list');
ul.style.paddingLeft = '0';
ul.style.listStyleType = 'none';
const TODOS_Ls = 'toDos';
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_Ls, JSON.stringify(toDos));
}

btn.addEventListener('click', () => {
  if (input.value === '') {
    alert('할 일을 입력하세요.');
  } else {
    const newId = new Date().getTime();

    const li = document.createElement('li');
    li.textContent = input.value;
    li.draggable = 'true'; // 드래그 이벤트 발생시 부드럽게 작동함
    li.id = newId;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      this.parentElement.remove();
      const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id); //현재 이벤트가 발ㅅ생한 li.id와 다른 id를 가진 todo만 넣어라.
      });
      toDos = cleanToDos;
      saveToDos();
    };

    li.prepend(checkbox);
    li.append(deleteBtn);
    ul.appendChild(li);
    const toDoObj = {
      text: input.value,
      id: newId,
    };
    toDos.push(toDoObj); // toDos에 toDoList 삽입
    saveToDos(); // localStorage에 저장하는 함수
    input.value = '';
  }
});

const loadedToDos = localStorage.getItem(TODOS_Ls);
if (loadedToDos !== null) {
  let parsedToDos = JSON.parse(loadedToDos);
  toDos = parsedToDos;
  for (let i = 0; i < toDos.length; i++) {
    const li = document.createElement('li');
    li.textContent = toDos[i].text;
    li.id = toDos[i].id;
    li.draggable = 'true';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      this.parentElement.remove();
      const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id); //현재 이벤트가 발ㅅ생한 li.id와 다른 id를 가진 todo만 넣어라.
      });
      toDos = cleanToDos;
      saveToDos();
    };
    li.prepend(checkbox);
    li.append(deleteBtn);
    ul.appendChild(li);
  }
}

let picked = null;
let pickedIndex = null;
ul.addEventListener('dragstart', (e) => {
  const obj = e.target;
  picked = obj;
  pickedIndex = [...obj.parentNode.children].indexOf(obj);
});
ul.addEventListener('dragover', (e) => {
  e.preventDefault();
});
ul.addEventListener('drop', (e) => {
  const obj = e.target;
  const index = [...obj.parentNode.children].indexOf(obj);
  if (index > pickedIndex) {
    obj.after(picked);
  } else {
    obj.before(picked);
  }
  //드래그 했을 때 로컬스토리지 순서 변경
  const updatedToDos = [];
  let newToDos = ul.childNodes;
  for (let i = 0; i < newToDos.length; i++) {
    let num1 = 0;
    let num2 = 0;
    num1 = parseInt(newToDos[i].id);
    for (let j = 0; j < toDos.length; j++) {
      num2 = parseInt(toDos[j].id);
      if (num1 === num2) {
        updatedToDos.push(toDos[j]);
      }
    }
  }
  toDos = updatedToDos;
  saveToDos();
});
