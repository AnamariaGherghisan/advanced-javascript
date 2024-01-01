const greet = function (msg1, msg2) {
  console.log(`Welcome ${this.name} - ${msg1} | ${msg2}!!`);
};

const user1 = { name: "Bob" };
const user2 = { name: "Alice" };

greet.call(user1);
greet.call(user2, "JavaScript", "React");
greet.apply(user1, ["JavaScript", "React"]);
