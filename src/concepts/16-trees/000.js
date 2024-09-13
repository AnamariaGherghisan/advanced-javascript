class Tree {
  constructor(value) {
    // add value property
    this.value = value;

    // add children property
    this.children = [];
  }
}

const tree = new Tree(1);
console.log(tree);
