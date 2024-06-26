const express = require('express');

const postsRouter = require('./routes/posts.router');
const usersRouter = require('./routes/users.router');
const path = require('path');

const port = 4000;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.json());

// 미들웨어 써본것!
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start : ${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end : ${req.method} ${req.baseUrl} ${diffTime}`);
});

app.get('/', (req, res) => {
  res.render('index', {
    imageTitle: 'It is a2 laundry',
  });
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`${port}포트에서 켜졌슈`);
});
