const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path');
const User = require('./models/users.model');
const passport = require('passport');
const cookiSession = require('cookie-session');
const key = require('./key.js');

const port = 4000;
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./config/passport');

const cookieEncrytionKey = ['key1', 'key2'];
app.use(
  cookiSession({
    keys: cookieEncrytionKey,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

//mongo db
mongoose.set('strictQuery', false);
mongoose
  .connect(key.key)
  .then(() => {
    console.log('몽고디비 연결됐다.');
  })
  .catch((err) => {
    console.log('에러코드 : ' + err);
  });

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/signup', async (req, res, next) => {
  // user 객체 생성
  const user = new User(req.body);
  try {
    // user 컬렉션에 유저를 저장
    await user.save();
    return res.status(200).json({ success: true });
  } catch (err) {
    console.log('err : ' + err);
  }
});

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

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ msg: info });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  })(req, res, next);
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 시작했다.');
});
