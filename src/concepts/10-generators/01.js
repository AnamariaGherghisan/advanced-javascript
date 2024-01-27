function* createFlow() {
  yield 1;
  yield 2;
  yield 3;
}

const myFunction = createFlow();

const element1 = myFunction.next();
console.log(element1);

const element2 = myFunction.next();
console.log(element2);

const element3 = myFunction.next();
console.log(element3);

const element4 = myFunction.next();
console.log(element4);
