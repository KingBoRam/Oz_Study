function sayHello(name, callback) {
  const words = '안녕하세요 저는 ' + name + '입니다.';
  callback(words);
}

sayHello('홍길동', function (name) {
  console.log(name);
});
