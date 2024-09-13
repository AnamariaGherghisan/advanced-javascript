class Tree {
  constructor(value) {
    // add value property
    this.value = value;

    // add children property
    this.children = [];
  }

  // method to add children to a given tree
  addChild(value) {
    // create a tree
    const tree = new Tree(value);

    // add tree to children of a parent tree
    this.children.push(tree);
  }
}

// root of the tree
const tree = new Tree(1);

// find the parent in the tree you want to add a child to
tree.addChild(2);

// find the parent in the tree you want to add a child to
tree.addChild(3);

// find the parent in the tree you want to add a child to
tree.children[1].addChild(4);

console.log(tree);
