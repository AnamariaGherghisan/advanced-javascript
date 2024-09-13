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

  // method to traverse through the tree
  traverse(manipulator) {
    // check if value is present
    if (this.value) {
      manipulator(this.value);

      // check if node has children
      if (this.children.length !== 0) {
        // iterate through the children
        for (const child of this.children) {
          child.traverse(manipulator);
        }
      }
    }
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

// do something for each node in my tree (console log the value for now)
const multiplyBy10 = (value) => {
  console.log(value * 10);
};

const multiplyBy100 = (value) => {
  console.log(value * 100);
};

tree.traverse(multiplyBy10);
tree.traverse(multiplyBy100);
