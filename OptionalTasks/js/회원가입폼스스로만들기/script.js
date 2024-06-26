const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let userName = e.target.name.value;
  let userNumber1 = e.target.usernumber1.value;
  let userNumber2 = e.target.usernumber2.value;
  let userId = e.target.id.value;
  let userPwd1 = e.target.pwd1.value;
  let userPwd2 = e.target.pwd2.value;
  let userEmail = e.target.email.value;
  let userSeletedEmail = e.target.emailoption.value;
  let userAddress = e.target.address.value;
  let userGender = e.target.gender.value;
  let agree = e.target.agree.checked;

  if (userId.length < 4 || userId.length > 8) {
    alert('아이디는 4글자 이상, 8글자 미만으로 작성해주세요');
    return;
  }
  if (userPwd1 !== userPwd2) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }
  console.log(
    getUserInfo(
      userName,
      userNumber1,
      userNumber2,
      userId,
      userPwd1,
      userEmail,
      userSeletedEmail,
      userAddress,
      userGender,
      agree,
    ),
  );
});

function getUserInfo(
  userName,
  userNumber1,
  userNumber2,
  userId,
  userPwd1,
  userEmail,
  userSeletedEmail,
  userAddress,
  userGender,
  agree,
) {
  const userInfo = {
    name: userName,
    ssn: userNumber1 + '-' + userNumber2,
    id: userId,
    password: userPwd1,
    email: userEmail + '@' + userSeletedEmail,
    address: userAddress,
    gender: userGender,
    agree: agree,
  };
  return userInfo;
}
