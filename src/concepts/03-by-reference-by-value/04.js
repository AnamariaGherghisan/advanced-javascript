const firstObject = { name: "Bob" };
const secondObject = firstObject;

firstObject.name = "Alice";

console.log("firstObject", firstObject);
console.log("secondObject", secondObject);
