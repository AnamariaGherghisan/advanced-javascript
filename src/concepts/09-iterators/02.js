const createFunction = (array) => {
  let i = 0;

  const getCurrentItem = () => {
    const currentItem = array[i];

    i += 1;

    return currentItem;
  };

  return getCurrentItem;
};

const nextElement = createFunction([1, 2, 3]);

const element1 = nextElement();
console.log(element1);

const element2 = nextElement();
console.log(element2);

const element3 = nextElement();
console.log(element3);
