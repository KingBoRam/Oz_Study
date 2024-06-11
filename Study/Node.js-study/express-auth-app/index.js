const cookieParser = require('cookie-parser');
const express = require('express');
const jwt = require('jsonwebtoken');

const port = 4000;
const secretText = 'superSecret';
const refreshSecretText = 'supersuperSecret';
const posts = [
  { username: 'john', title: 'Post 1' },
  { username: 'Han', title: 'Post 2' },
];
let refreshTokens = [];

const app = express();
app.use(express.json());
app.use(cookieParser());

app.post('/login', (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  // jwt 토큰생성 payload = secretText
  // 유효기간 추가
  const accessToken = jwt.sign(user, secretText, { expiresIn: '30s' });
  // refresh token 생성
  const refreshToken = jwt.sign(user, refreshSecretText, { expiresIn: '1d' });
  refreshTokens.push(refreshToken);
  //refreshToken 쿠키에 저장
  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json({ accessToken });
});

app.get('/refresh', (req, res) => {
  // 쿠키 가져오기
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }
  const refreshToken = cookies.jwt;
  // refreshToken이 db에 있는지 확인
  if (!refreshToken.includes(refreshTokens)) {
    return res.sendStatus(403);
  }
  // 있다면 유효한지 확인
  jwt.verify(refreshToken, refreshSecretText, (err, user) => {
    if (err) return res.sendStatus(403);
    // accesstoken 새롭게 생성
    const accessToken = jwt.sign({ name: user.name }, secretText, {
      expiresIn: '30s',
    });
    res.json(accessToken);
  });
});

app.get('/posts', authMiddleware, (req, res) => {
  res.json(posts);
});

function authMiddleware(req, res, next) {
  // 토큰을 req헤더에서 가져오기
  const authHeader = req.headers.authorization;
  // Bearer 2342342zasfsafd.afwefasdf.ggaega
  const token = authHeader && authHeader.split(' ')[1];
  // 토큰이 없으면 인증안됨
  if (!token) return res.sendStatus(401);
  // 토큰이 있으면 유효한지 확인
  jwt.verify(token, secretText, (err, user) => {
    // 토큰이 일치하지 않으면 권한없음
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(port, () => {
  console.log(`${port}포트에서 서버 시작했다`);
});
