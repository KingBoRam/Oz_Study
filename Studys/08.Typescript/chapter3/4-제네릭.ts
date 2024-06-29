// <T> 어떤 글자든 상관 없음

// function genericFunction<T>(arg: T): T {
//   return arg;
// }

// interface GenericInterface<T> {}

// class GenericClass<T> {}

let numbers: Array<number> = [1, 2, 3];
let strings: Array<string> = ["1", "2", "3"];

let div = document.querySelector<HTMLDivElement>("#myDiv1");
div?.innerHTML;

let div2: HTMLDivElement | null = document.querySelector("#myDiv2");
div?.innerHTML;

// let button = document.querySelector<HTMLButtonElement>("#myButton1");

function getFirstNumberElement(arr: number[]) {
  if (!arr.length) {
    return undefined;
  }
  return arr[0];
}
// const firstNumber = getFirstNumberElement(numbers);

function getFirstStringElement(arr: string[]) {
  if (!arr.length) {
    return undefined;
  }
  return arr[0];
}
// const firstString = getFirstStringElement(strings);

function getFirstElement<T>(arr: T[]): T | undefined {
  if (!arr.length) {
    return undefined;
  }
  return arr[0];
}
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement<string>(strings);

interface strDict {
  [key: string]: string;
}

interface numDict {
  [key: string]: number;
}

interface Dict<T> {
  [key: string]: T;
}

interface Entry<K, V> {
  key: K;
  value: V;
}

let entry: Entry<string, number> = {
  key: "age",
  value: 30,
};

let entry2: Entry<number, string[]> = {
  key: 1,
  value: ["red"],
};

let strObj: Dict<string> = {
  name: "Elliot",
};

let numObj: Dict<number> = {
  age: 30,
};
