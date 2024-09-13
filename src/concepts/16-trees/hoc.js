class Inhabitants {
  constructor(people) {
    this.people = people;
  }

  getPeopleOver(age) {
    // target the array - this.people and use the reduce method
    return this.people.reduce((acc, person) => {
      // check if the person's age is over given age
      if (person.age > age) {
        // create a newItem where we concatenate the firstName and lastName of the person object
        const newItem = `${person.firstName} ${person.lastName}`;
        // reassign the accumulator with a new array where you spread each item from the current accumulator and add the newItem
        acc = [...acc, newItem];
      }

      return acc;
    }, []);
  }

  refactoredGetPeopleOver(age) {
    return this.people.reduce(
      (acc, person) =>
        person.age > age
          ? [...acc, `${person.firstName} ${person.lastName}`]
          : acc,
      []
    );
  }
}

const inhabitants = new Inhabitants([
  { firstName: "John", lastName: "Smith", age: 40 },
  { firstName: "Jane", lastName: "Doe", age: 68 },
  { firstName: "Grace", lastName: "Hopper", age: 85 },
  { firstName: "Bart", lastName: "Simpson", age: 10 },
]);

console.log(inhabitants.getPeopleOver(50));
console.log(inhabitants.refactoredGetPeopleOver(50));
