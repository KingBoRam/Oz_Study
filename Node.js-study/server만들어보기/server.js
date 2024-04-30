const http = require('http');
const port = 4000;
const target = { a: 'a', b: 'b' };
// 서버생성
const server = http.createServer((req, res) => {
  //요청이 왔을때 어떻게할지 -> 요청은 콘솔에서 fetch를 써서 보냄.
  if (req.method === 'POST' && req.url === '/home') {
    req.on('data', (data) => {
      console.log(data);
      const stringData = data.toString();
      console.log(stringData);
      Object.assign(target, JSON.parse(stringData));
    });
  } else {
    if (req.url === '/home') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(target));
    } else if (req.url === '/about') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<body>');
      res.write('<div>about apge</div>');
      res.write('</body>');
      res.write('</body>');
    } else {
      // 그 종류가 아니면 404를 줘라
      res.statusCode = 404;
      res.end();
    }
  }
});

server.listen(port, () => {
  console.log(`리스닝잘댓다 ${port}번 포트여~`);
});
