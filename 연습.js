function dog() {
  name = '콩이';
  breed = '시츄';
  return { name, breed };
}
const myDog = dog();
const myDog2 = myDog;
console.log(myDog2 === myDog);
