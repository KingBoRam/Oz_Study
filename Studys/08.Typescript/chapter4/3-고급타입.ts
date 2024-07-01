// // 교차타입 intersection type
// // 두개 이상의 타입을 결합해서 모든 타입의 속성을 가지는 단일 타입을 생성한다

// type A = {
//   name: string;
// };
// type B = {
//   age: number;
// };
// type Person = A & B;

// const person: Person = {
//   name: "as",
//   age: 10,
// };

// type UserBase = {id: number};
// type WithName = {name: string};
// type WithEmail = {email: string};
// type WithAge = {age: number};

// type GuestUser = UserBase & WithName;
// type User = UserBase & WithName & WithEmail & WithAge;

// const guestUser: GuestUser = {
//   id: 100,
//   name: "as",
// };
// const user: User = {
//   id: 1,
//   name: "1",
//   email: "1",
//   age: 1,
// };

// // 조건부타입 conditional type
// // 타입을 정의할 때 특정 조건에 따라 하나의 타입 또는 또 다른 타입으로 정의할 수 있게 하는 패턴
// // js의 삼항조건연산자를 타입에 적용할 수 있음
// // type conditionalType = T extends U ? X : Y;

// type IsNumber<T> = T extends number ? "Yes" : "No";

// type Result1 = IsNumber<number>;
// type Result2 = IsNumber<string>;

// type JsonOrText<T extends "json" | "text"> = T extends "json" ? object : string;
// type JsonResponse = JsonOrText<"json">;
// type TextResponse = JsonOrText<"text">;

// // keyof 타입 연산자
// // 객체의 속성명key가 문자열리터럴 또는 숫자열리터럴 타입으로 추출할 때 사용 key를 모두 유니언타입으로 가져올 수 있음
// type MyObject = {
//   a: number;
//   b: string;
//   c: boolean;
// };

// type Keys = keyof MyObject; // 'a'|'b'|'c'

// function getProp<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// const obj = {x: 10, y: 20, z: 30};
// const value = getProp(obj, "z");

// // 맵핑타입 mapped type
// // 기존 타입을 새로운 타입으로 반환?변환?한다
// // 기존 타입의 프로퍼티를 반복해서 새로운 타입을 생성한다. 새로운것도 추가 가능

// type Mapped<T> = {
//   [P in keyof T]: T[P];
// };

// type OptionalType<T> = {
//   [P in keyof T]?: T[P];
// };
// type ReadonlyType<T> = {
//   readonly [P in keyof T]: T[P];
// };

// type UserType = {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// };

// // UserType의 모든 속성을 옵셔널로변환
// type OptionalUserType = OptionalType<UserType>;
// // UserType의 모든 속성을 readonly로 변환
// type ReadonlyUserType = ReadonlyType<UserType>;
