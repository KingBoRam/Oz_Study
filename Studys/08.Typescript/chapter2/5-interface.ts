// interface

// 기본문법
// interface 이름 {
// 	속성이름1 : 속성타입1;
// 	속성이름2 : 속성타입2;
// 	속성이름3: 속성타입3;
// 	메서드이름() : 메서드타입;
// }

// interface User {
//   id: number;
//   name: string;
//   isPremium: boolean;
//   someMethod(): void;
// }

// const userA: User = {
//   id: 1,
//   name: "sam",
//   isPremium: true,
//   someMethod() {
//     console.log("some method called");
//   },
// };

// type alias vs interface
// 두 기능의 목적은 크게 다르지 않다.
// 가장 큰 차이는 문법과 지원되는 타입의 차이다.
// alias는 type user = {}, 객체 포함 리터럴, 원시값 등을 타입으로 가질 수 있다.
// interface는 interface User{}, 인터페이스는 객체타입으로만 사용 할 수 있고 확장 문법이 다르다.

// readonly & optional property
// 객체와 마찬가지로 속성마다 지정할수있음.
// interface User {
//   readonly id: number;
//   name: string;
//   isPremium?: boolean;
// }
// const testUser: User = {
//   id: 100,
//   name: "john",
// };
// testUser.id = 30

// 메서드 / 함수 타입
interface User {
  readonly id: number;
  name: string;
  isPremium?: boolean;
  greet(message: string): string;
}

const testUser: User = {
  id: 100,
  name: "selly",
  isPremium: false,
  greet(message) {
    return message + this.name;
  },
};

testUser.greet("hello");

// 확장 및 조합
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

interface Student extends Person, Employee {
  studentId: number;
}

const PersonA: Person = {
  name: "Eli",
  age: 30,
};

const studentA: Student = {
  name: "sam",
  age: 18,
  studentId: 1,
  employeeId: 1,
};
