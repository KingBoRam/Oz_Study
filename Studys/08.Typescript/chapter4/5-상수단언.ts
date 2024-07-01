// 상수단언은 기본적으로 배열 또는 객체를 변경 불가능한 상태로 만들 수 있다.
// 코드 내에서 해당 배열이나 객체가 변경될 수 없게 만들어서 안정적으로 만듬

// 객체의 상수단언
const objName = {} as const;

// 배열
const arrName = [] as const;

const book = {
  title: "TypeScript Guide",
  author: "coding moon",
} as const;

const nums = [1, 2, 3, 4, 5] as const;

// const config = {
//   server: "https://api.somedomain.com",
//   port: 8080,
//   version: 2,
// } as const;

export const statusCodeMap = {
  101: "ordered",
  102: "pending",
  103: "completed",
} as const;

export type statusCodeKeys = keyof typeof statusCodeMap;

function handleStatue(statusCode: statusCodeKeys) {
  const message = statusCodeMap[statusCode];
}
