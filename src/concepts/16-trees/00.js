class Tree {
  // construct a tree with value and children
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // method to add a child for a given value
  addChild(value) {
    // create an instance of a tree for a value
    const tree = new Tree(value);

    // add the tree to its children
    this.children.push(tree);
  }
}

const tree = new Tree(2);

tree.addChild(4);
tree.addChild(6);
tree.addChild(8);

tree.children[0].addChild(10);
tree.children[0].addChild(12);

console.log(tree);
