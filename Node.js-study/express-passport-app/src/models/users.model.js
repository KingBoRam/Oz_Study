const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minLenght: 5,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
});
const saltRounds = 10;
userSchema.pre('save', function (next) {
  let user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // 원래는 bcrypt 모듈을 용해서 비번을 암호화 해야한다. 지금은 123456789 들어있지만 이러면 안됨.
  // 그리고 또 bcrypt를 해서 비교해야하지만 우리는 안했으니까 그냥
  // plainpassword는 클라이언트에서 온거 this.는 db에 있는거
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
