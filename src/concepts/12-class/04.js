const mathObjectCreator = function (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
};

mathObjectCreator.prototype.add = function () {
  return this.num1 + this.num2;
};

mathObjectCreator.prototype.subtract = function () {
  return this.num1 - this.num2;
};

const user1 = new mathObjectCreator(20, 4);
const user2 = new mathObjectCreator(50, 10);

console.log("User 1");
console.log(user1);
console.log(user1.add());
console.log(user1.subtract());

console.log("User 2");
console.log(user2);
console.log(user2.add());
console.log(user2.subtract());
