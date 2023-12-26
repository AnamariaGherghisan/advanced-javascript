let user = "Alice";

const changeUser = () => {
  user = "Bob";
  const email = "bob@email.com";
  console.log(user);
  console.log(email);
};

console.log(user);
console.log(email);

changeUser();

console.log(email);
console.log(user);
