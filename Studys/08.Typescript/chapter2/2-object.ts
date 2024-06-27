// 기본 객체 타입 - 타입명시
let monitor: {
  brand: string;
  price: number;
} = {
  brand: "",
  price: 0,
};
monitor.brand = "LG";
monitor.price = 0;
monitor = {
  brand: "LG",
  price: 0,
};
// monitor.displaySize = 22

// 기본 객체 타입 - 타입추론
let monitors = {
  brand: "LG",
  price: 120,
};
// monitors.price = '123'

// optional 프로퍼티
// let users: {id: string; name: string; age?: number};
// users = {
//   id: "123",
//   name: "john",
// };

// readonly 프로퍼티
let users: {readonly id: string; name: string; age?: number};
users = {
  id: "123",
  name: "john",
};
users.name = "smith";
// users.id = '1234'
let apiConfig: {
  readonly clientKey: string;
  readonly url: string;
};

// 타입별칭 type alias
// 위에서 한 것처럼 객체리터럴로 미리 타입을 정의하면 재사용성이 떨어짐으로
// 사용자가 정의한 타입의 조합에 이름을 할당해서 필요한곳에 적용할 수 있게 해준다. << 실제로 강사님이 한말. 무슨뜻인지 모르겠음
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// };
// let user1: UserType = {
//   id: "1",
//   name: "john",
//   age: 20,
// };
// let user2: UserType = {
//   id: "2",
//   name: "smith",
//   age: 23,
// };
// let userss: UserType[] = [];
// userss.push(user1);
// userss.push({});
// userss.push({id:'1', name:'smith', age:23})
// userss.push({id:'1'})

// nested 객체 ( 중첩 객체 )

type Payload = {
  timestamp: number;
  type: string;
  user: {
    id: string;
    isActive: boolean;
  };
};

const payload: Payload = {
  timestamp: 12893718,
  type: "event",
  user: {
    id: "123",
    isActive: true,
  },
};
