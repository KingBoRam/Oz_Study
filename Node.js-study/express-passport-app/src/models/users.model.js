const mongoose = require('mongoose');

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

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // 원래는 bcrypt 모듈을 용해서 비번을 암호화 해야한다. 지금은 123456789 들어있지만 이러면 안됨.
  // 그리고 또 bcrypt를 해서 비교해야하지만 우리는 안했으니까 그냥
  // plainpassword는 클라이언트에서 온거 this.는 db에 있는거
  if (plainPassword === this.password) {
    cb(null, true);
  } else {
    cb(null, false);
  }
  return cb({ err: 'error' });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
