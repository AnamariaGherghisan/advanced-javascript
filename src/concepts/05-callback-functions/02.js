const copyArrayAndManipulate = (array, manipulator) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    const result = manipulator(currentItem);
    output.push(result);
  }

  return output;
};

const multiplyBy2 = (input) => {
  return input * 2;
};

const addBy3 = (input) => {
  return input + 3;
};

const myArray = [1, 2, 3];

const result1 = copyArrayAndManipulate(myArray, multiplyBy2);

console.log(result1);

const result2 = copyArrayAndManipulate(myArray, addBy3);

console.log(result2);
