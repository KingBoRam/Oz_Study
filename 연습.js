const addbtn = document.getElementById('add');
const delbtn = document.getElementById('del');
const rebtn = document.getElementById('re');

const arr = [
  { text: '1', id: 123 },
  { text: '2', id: 456 },
];
addbtn.addEventListener('click', function () {
  const newId = new Date().getTime();
  localStorage.setItem(123, JSON.stringify(arr));
});
