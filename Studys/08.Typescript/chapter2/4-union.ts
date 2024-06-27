// union

// 기초
let userId: string | number;
userId = 1;
userId = "1";
// userId = true;
function printuserId(id: string | number) {
  console.log(id);
}
printuserId("1");
printuserId(1);
// printuserId(true)

// type narrowing
function processValue(value: number | string) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString().toUpperCase();
}

// 배열 사용 예시
// 배열은 한가지로 사용해야하지만, 상황에 따라서 아닐 수도 있다.
let mixedValues: (string | number)[] = [];
mixedValues.push("100");
mixedValues.push(100);
// mixedValues.push({});

// 리터럴과 유니언
// 리터럴은 타입자체를 값과 타입으로 함께 사용 할 수 있는 개념
// let id: '1';
// id = '2'

const toggle = (option: "on" | "off") => {
  console.log(option);
};

// toggle("on");
// toggle("off");
// toggle(0);

// type alias + union + literal
type Size = "xs" | "s" | "m" | "l" | "xl";

let tShirtSize: Size;
tShirtSize = "s";
// tShirtSize = 'xxl'

function setSize(size: Size) {
  switch (size) {
    case "xs":
      break;
    case "l":
      break;
    //...
  }
}

// type alias와 union

type SuccessCode = 200 | 201 | 202;
type ErrorCode = 500 | 501 | 503;

let responseCode: SuccessCode | ErrorCode;

responseCode = 200;
// responseCode = 400;
