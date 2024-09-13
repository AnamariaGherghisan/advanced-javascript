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

  traverse() {
    // if it is a valid tree
    if (this.value) {
      console.log(this.value);

      // if it has children and they are not empty
      if (this.children && this.children.length !== 0) {
        // log each child
        this.children.forEach((child) => {
          console.log(child.value);
        });
      }
    } else {
      console.log("Invalid tree");
    }
  }
}

const tree = new Tree("Alice");

tree.addChild("Bob");
tree.addChild("Carol");

console.log(tree);

tree.traverse();

/** DEPTH FIRST
 *  ===========
 *
 * Alice
 *  Bob
 *  Carol
 */
