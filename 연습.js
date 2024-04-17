class 사람 {
  constructor(이름, 나이) {
    this.이름 = 이름;
    this.나이 = 나이;
  }
  말하기() {
    console.log(`${this.name} : 안녕하세요~`);
  }
}

const 보람 = new 사람('보람', '비밀');
console.log(보람);
