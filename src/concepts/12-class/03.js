const mathObjectCreator = (num1, num2) => {
  const myMathObj = Object.create(mathStore);

  myMathObj.num1 = num1;
  myMathObj.num2 = num2;

  return myMathObj;
};

const mathStoreCreator = () => {
  const add = function () {
    return this.num1 + this.num2;
  };

  const subtract = function () {
    return this.num1 - this.num2;
  };

  return {
    add,
    subtract,
  };
};

const mathStore = mathStoreCreator();

const user1 = mathObjectCreator(20, 4);
const user2 = mathObjectCreator(50, 10);

console.log("User 1");
console.log(user1);
console.log(user1.add());
console.log(user1.subtract());

console.log("User 2");
console.log(user2);
console.log(user2.add());
console.log(user2.subtract());
