function* createFlow(num) {
  const newNum = yield num + 2;

  yield 5 + newNum;
  yield 6;
}

const myFunction = createFlow(10);

const element1 = myFunction.next();
console.log(element1);

const element2 = myFunction.next(2);
console.log(element2);

const element3 = myFunction.next();
console.log(element3);

const element4 = myFunction.next();
console.log(element4);
