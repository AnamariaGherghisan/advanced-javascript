const greet = function (message) {
  console.log(`Welcome ${this.name} - ${message}!!`);
};

const user1 = { name: "Bob" };
const user2 = { name: "Alice" };

const myGreet = function () {
  greet.call(user1);
};

myGreet();
greet.call(user2, "JavaScript");
greet.apply(user1, ["JavaScript"]);
