const cookiSession = require('cookie-session');
const express = require('express');
const { default: mongoose } = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('config');
const mainRouter = require('./routes/main.router.js');
const usersRouter = require('./routes/user.router.js');
const serverConfig = config.get('server');
const port = serverConfig.port;

const app = express();

require('dotenv').config();
require('./config/passport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  cookiSession({
    keys: [process.env.COOKIE_ENCRYPTION_KEY],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// register regenerate & save after the cookieSession middleware initialization
app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/auth', usersRouter);

//mongo db
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('몽고디비 연결됐다.');
  })
  .catch((err) => {
    console.log('에러코드 : ' + err);
  });

app.listen(port, () => {
  console.log(port + '포트에서 서버 시작했다.');
});
