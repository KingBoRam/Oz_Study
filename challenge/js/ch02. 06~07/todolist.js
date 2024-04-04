const input = document.getElementById('todo-input');
const btn = document.getElementById('add-btn');
const ul = document.getElementById('todo-list');
ul.style.paddingLeft = '0';
ul.style.listStyleType = 'none';
const list = [];
console.log(list);

btn.addEventListener('click', () => {
  if (input.value === '') {
    alert('할 일을 입력하세요.');
  } else {
    list.push(input.value);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      this.parentElement.remove();
    };

    const li = document.createElement('li');

    for (let i = 0; i < list.length; i++) {
      li.textContent = input.value;
      li.draggable = 'true';
      li.prepend(checkbox);
      li.append(deleteBtn);
      ul.appendChild(li);
    }
    input.value = '';
  }
});
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
});
// 로컬에추가하고 추가한거 새로고침해도 리스트에 보여주기까진했는데 새로고침하면 순서바뀌고
// 새로고침후에 삭제하면 오류나서 못해먹겠어요 흑흑 오류의 늪이야
