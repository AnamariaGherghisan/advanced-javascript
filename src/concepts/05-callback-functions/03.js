const reduce = (array, manipulator, accumulator) => {
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    accumulator = manipulator(accumulator, currentItem);
  }

  return accumulator;
};

const add = (a, b) => {
  return a + b;
};

const summed = reduce([1, 2, 3], add, 0);

console.log(summed);
