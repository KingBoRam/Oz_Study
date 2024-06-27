// 함수 타입

// parameter1
function add(x: number, y: number): number {
  return x + y;
}
// add(1, "1");
// add("1", 1);
const result = add(1, 1);

// parameter2
// function addToCart(name: string, price: number, quantity: number) {
//   return `${name}, ${price}, ${quantity}`;
// }
// addToCart("orange", 100, 5);
// addToCart("orange", 100);

// default parameter
// function addToCart(name: string, price: number, quantity: number = 1) {
//   return `${name}, ${price}, ${quantity}`;
// }
// addToCart("orange", 10);

// optional parameter
// function addToCart(name: string, price: number, quantity?: number) {
//   if (quantity) {

//   }
//   return `${name}, ${price}, ${quantity || 1}`;
// }
// addToCart("apple", 3);

// contextual typing
const numbers: number[] = [1, 2, 3, 4, 5];
const letters: string[] = ["a", "b", "c"];
numbers.map((item) => {
  item + 1;
});

// return type annotation
function addTowValues(x: number, y: number): number {
  return x + y;
}
function isTen(x: number, y: number): boolean {
  return x + y === 10;
}

// void, never
function logMessage(message: string): void {
  console.log(message);
}
function throwError(message: string): never {
  throw new Error(message);
}
