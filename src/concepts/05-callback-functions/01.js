const myArray = [1, 2, 3];

const copyArrAndMulBy2 = (array) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    output.push(currentItem * 2);
  }

  return output;
};

const copyArrAndDivBy2 = (array) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    output.push(currentItem / 2);
  }

  return output;
};

const copyArrAndAdd3 = (array) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    output.push(currentItem + 3);
  }

  return output;
};

const result1 = copyArrAndMulBy2(myArray);

console.log(result1);

const result2 = copyArrAndDivBy2(myArray);

console.log(result2);

const result3 = copyArrAndAdd3(myArray);

console.log(result3);
