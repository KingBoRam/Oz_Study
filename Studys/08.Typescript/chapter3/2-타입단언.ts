// 타입 단언

// 기본문법
// 표현식 as 지정할 타입
const someValue: unknown = "Hey there";

const len = (someValue as string).length;

// const button = document.getElementById("button") as HTMLButtonElement;
// button.disabled = false;
