// 제출이벤트를 받는다(이벤트핸들링)
// 제출된 입력값들을 참조한다
// 로직구현 입력값에 문제가 있는 경우 이를 감지한다(예. 아이디가 너무 짧아요, 비번과 비번확인 일치여부)
// 가입환영 인사 제공

const form = document.getElementById('form');
// 이름없는 함수는 익명함수
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 기존기능차단
  let userId = e.target.id.value;
  let userPw1 = e.target.pw1.value;
  let userPw2 = e.target.pw2.value;
  let userName = e.target.name.value;
  let userPhone = e.target.phone.value;
  let userPosition = e.target.position.value;
  let userGender = e.target.gender.value;
  let userEmail = e.target.email.value;
  let userIntro = e.target.intro.value;

  if (userId.length < 6) {
    alert('아이디가 너무 짧아요. 6자 이상 입력해주세요.');
    // 아이디 혹은 비밀번호확인 하나만 실패했어도 어차피 다시 입력해야하기 때문에,
    // 둘 다 알림창이 뜨게 하지 않고 return = 함수 강제종료 를 넣어서 하나만 false라도 이벤트함수가 끝나게 하는것. 아래 리턴도 마찬가지
    return;
  }
  if (userPw1 !== userPw2) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  // 가입 잘되었다 환영! -> 페이지를 아예 바꿔야 하니까 body의 내용을 싹 지움
  document.body.innerHTML = '';
  document.write(`<p>${userId}님 환영합니다.</p>`);
  document.write(`<p>회원 가입시 입력하신 내역은 다음과 같습니다.</p>`);
  document.write(`<p>아이디 : ${userId}</p>`);
  document.write(`<p>이름 : ${userName}</p>`);
  document.write(`<p>전화번호 : ${userPhone}</p>`);
  document.write(`<p>원하는 직무 : ${userPosition}</p>`);
});

// 회원 가입을 완료하면 나타나는 환연인사를 다같이 만들어 보자
// userid님 환영합니다
// 회원가입시 입력하신 내역은 다음과 같습니다
// 아이디: userid
// 이름: userName
// 전화번호: userPhone
// 원하는 직무 : userPosition
