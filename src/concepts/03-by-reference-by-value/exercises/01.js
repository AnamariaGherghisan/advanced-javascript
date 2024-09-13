const firstObject = { name: "Bob" };
let secondObject = firstObject;

console.log("secondObject", secondObject);

const anotherObject = { name: "Carol" };
secondObject = anotherObject;

firstObject.name = "Alice";

console.log("secondObject", secondObject);

secondObject.name = "Eve";
console.log("anotherObject", anotherObject);
