let count = 0;

export const increment = () => {
  console.log("increment");
  count += 1;
};

export const decrement = () => {
  console.log("decrement");
  count -= 1;
};

export const display = () => {
  console.log(`Counter: ${count}`);
};
