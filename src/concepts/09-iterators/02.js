const createNextFunction = (array) => {
  let i = 0;

  const next = () => {
    const currentItem = array[i];

    i += 1;

    return currentItem;
  };

  return next;
};

const next = createNextFunction([1, 2, 3]);

const element1 = next();
console.log(element1);

const element2 = next();
console.log(element2);

const element3 = next();
console.log(element3);
