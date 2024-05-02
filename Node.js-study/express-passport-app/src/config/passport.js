const passport = require('passport');
const User = require('../models/users.model');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require('../key');

// req.login(user)
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// 이후 클라이언트에서 세션 데이터를 가지고 요청을 보내면
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

const localStrategyConfig = new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  (email, password, done) => {
    User.findOne({ email: email.toLocaleLowerCase() })
      .then((user) => {
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found` });
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) return done(err);
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { msg: 'Invalid email or password.' });
        });
      })
      .catch((err) => {
        return done(err);
      });
  },
);
passport.use('local', localStrategyConfig);

const googleStrategyConfig = new GoogleStrategy(
  {
    clientID: key.googleClientId,
    clientSecret: key.googleClientPwd,
    callbackURL: '/auth/google/callback',
    scope: ['email', 'profile'],
  },
  async (accessToken, refreshToken, profile, done) => {
    // console.log('profile', profile);
    try {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      } else {
        const user = new User();
        user.email = profile.emails[0].value;
        user.googleId = profile.id;
        user.save((err) => {
          console.log(err);
          if (err) {
            return done(err);
          }
          done(null, user);
        });
      }
    } catch (error) {
      return done(error);
    }
  },
);
passport.use('google', googleStrategyConfig);

// const kakaoStrategyConfig = new KakaoStrategy(
//   {
//     clientID: process.env.KAKAO_CLIENT_ID,
//     callbackURL: '/auth/kakao/callback',
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       const existingUser = await User.findOne({ kakaoId: profile.id });
//       if (existingUser) {
//         return done(null, existingUser);
//       } else {
//         const user = new User();
//         user.kakaoId = profile.id;
//         user.email = profile._json.kakao_account.email;
//         user.save((err) => {
//           if (err) {
//             return done(err);
//           }
//           done(null, user);
//         });
//       }
//     } catch (error) {
//       return done(error);
//     }
//   },
// );
// passport.use('kakao', kakaoStrategyConfig);
