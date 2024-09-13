const functionGenerator = (count = 0) => {
  const increment = () => {
    count++;
    console.log(`Counter: ${count}`);
  };

  const decrement = () => {
    count--;
    console.log(`Counter: ${count}`);
  };

  return {
    increment,
    decrement,
  };
};

const counter1 = functionGenerator();

counter1.increment();
counter1.decrement();

const counter2 = functionGenerator();

counter2.increment();
