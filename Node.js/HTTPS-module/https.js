const { send } = require('./lib/request');
const { read } = require('./lib/response');

//요청보내기
function makeRequest(url, data) {
  //요청보내기
  send(url, data);
  //데이터 return
  return read();
}

const responseData = makeRequest('https://naver.com', 'any data');
