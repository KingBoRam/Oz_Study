const express = require('express');
const multer = require('multer');
const upload = multer({ dest: '/tmp' });
const {
  register,
  login,
  updateUserDetails,
  logout,
  uploadPicture,
} = require('../controllers/userController');
const router = express.Router();

//http://localhost:4000/user/register Post
router.route('/register').post(register);
// router.post('/register', register);
// 아래랑 무슨 차이인지 잘모르겠지만 아래처럼해도 똑같이 동작함
router.route('/login').post(login);
router.route('/').put(updateUserDetails);
router.route('/logout').get(logout);
router.route('/picture').post(upload.single('picture', 1), uploadPicture);

module.exports = router;
