const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path');
const User = require('./models/users.model');
const passport = require('passport');
const cookiSession = require('cookie-session');
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require('./middlewares/auth.js');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./config/passport');
require('dotenv').config();

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

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index');
});

app.get('/signup', checkNotAuthenticated, (req, res) => {
  res.render('signup');
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login');
});

app.post('/logout', (req, res, next) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
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

app.get('/auth/google', passport.authenticate('google'));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
  }),
);

const config = require('config');
const serverConfig = config.get('server');
const port = serverConfig.port;

app.listen(port, () => {
  console.log(port + '포트에서 서버 시작했다.');
});
