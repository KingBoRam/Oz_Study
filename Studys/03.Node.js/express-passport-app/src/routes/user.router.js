const express = require('express');
const usersRouter = express.Router();
const User = require('../models/users.model');
const passport = require('passport');
const sendEmail = require('../mail/mail');

usersRouter.post('/login', (req, res, next) => {
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

usersRouter.post('/logout', (req, res, next) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

usersRouter.post('/signup', async (req, res, next) => {
  // user 객체 생성
  const user = new User(req.body);
  try {
    // user 컬렉션에 유저를 저장
    await user.save();
    sendEmail('bory2321@naver.com', '받는사람 이름', 'welcome');
    res.redirect('/login');
  } catch (err) {
    console.log('err : ' + err);
  }
});

usersRouter.get('/google', passport.authenticate('google'));

usersRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
  }),
);

usersRouter.get('/kakao', passport.authenticate('kakao'));

usersRouter.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
  }),
);

module.exports = usersRouter;
