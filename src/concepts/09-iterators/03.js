const iterator = (array) => {
  let index = 0;

  const next = () => {
    if (index < array.length) {
      const value = array[index];

      index += 1;

      return {
        value,
        index: index - 1,
        done: index === array.length,
      };
    } else {
      return {
        value: undefined,
        index: -1,
        done: true,
      };
    }
  };

  return { next, index };
};

const myArray = iterator([1, 2, 3]);

const element1 = myArray.next();
console.log(element1);

const element2 = myArray.next();
console.log(element2);

const element3 = myArray.next();
console.log(element3);

const element4 = myArray.next();
console.log(element4);
