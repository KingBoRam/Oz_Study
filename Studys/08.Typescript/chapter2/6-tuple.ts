// tuple
// union에서 배열을 했던거는 배열 값이 어떤타입or어떤타입이어도 된다는거고
// tuple은 좀 더 엄격하게 각 요소는 이 타입을 가져야해! 인듯

// 기본문법
// const myTuple: [string, number, boolean] = ["Hello", 15, false];
let myTuple: [string, number, boolean];

myTuple = ["Hello", 15, false];
// myTuple = ["Hello", false, 15];

// 사용예시1 : 함수가 여러 값을 반환해야 할 때
function getUserInfo(): [number, string] {
  return [1, "1"];
}
const [userId, userName] = getUserInfo();

// 사용예시2 : type alias
type Flavor = string;
type price = number;
type IceCream = [Flavor, price];
const vanilla: IceCream = ["vanilla", 1500];
vanilla[0];
vanilla[1];

// 사용예시3
type lat = number;
type lng = number;
type Coord = [lat, lng];

let coords: Coord[] = [];

coords.push([36, -95]);
coords.push([38, -75]);

for (const [lat, lng] of coords) {
  console.log(lat, lng);
}
