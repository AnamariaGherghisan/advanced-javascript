class MyMath {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  sub() {
    return this.num1 - this.num2;
  }
}

const user1 = new MyMath(20, 4);
const user2 = new MyMath(50, 10);

console.log(user1);
console.log(user2);

console.log("User 1");
console.log(user1.add());
console.log(user1.sub());

console.log("User 2");
console.log(user2.add());
console.log(user2.sub());
