const input = document.getElementById('todo-input');
const ul = document.getElementById('todo-list');
const btn = document.getElementById('add-btn');
// 새로고침 했을 때 로컬스토리지에서 리스트를 받아오는 부분
const ulList = window.localStorage;
const itemList = [];
// 모든 키-값 쌍에 대해 반복하여 itemList 배열에 추가
for (let i = 0; i < ulList.length; i++) {
  const key = ulList.key(i);
  const value = ulList.getItem(key);
  itemList.push({ key, value });
}
for (let i = 0; i < itemList.length; i++) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = itemList[i].value;
  console.log(span.textContent);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'x';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function () {
    const text = event.target.parentElement.querySelector('span').textContent;
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i].value === text) {
        const removeKey = itemList[i].key;
        this.parentElement.remove();
        window.localStorage.removeItem(removeKey);
        for (let i = 0; i < ulList.length; i++) {
          const key = ulList.key(i);
          const value = ulList.getItem(key);
          itemList.push({ key, value });
        }
        break;
      }
    }
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}
// 버튼을 누르면 리스트가 생성되는 부분
document.getElementById('add-btn').addEventListener('click', () => {
  if (input.value === '') {
    alert('텍스트를 입력해주세요.');
  } else {
    const li = document.createElement('li');
    fetchUnixTimestamp = function () {
      return Math.floor(new Date().getTime() / 1000);
    };
    const index = fetchUnixTimestamp();

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);

    const span = document.createElement('span');
    span.textContent = input.value;
    console.log(span.textContent);
    li.appendChild(span);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      const text = event.target.parentElement.querySelector('span').textContent;
      for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].value === text) {
          const removeKey = itemList[i].key;
          this.parentElement.remove();
          window.localStorage.removeItem(removeKey);
          for (let i = 0; i < ulList.length; i++) {
            const key = ulList.key(i);
            const value = ulList.getItem(key);
            itemList.push({ key, value });
          }
          break;
        }
      }
    };
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    window.localStorage.setItem(index, input.value);
    input.value = '';
  }
});

// 심화1) 입력한 TO-DO가 Local Storage에 저장되어 새로 고침 후에도 유지되도록 해보세요.
// 심화2) 할 일 항목에 완료 표시를 할 수 있는 체크박스를 추가해 보세요.
// 심화3) TO-DO 리스트를 드래그 앤 드롭으로 정렬할 수 있는 방법을 검색하고 적용해 보세요.
