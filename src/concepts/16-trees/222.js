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
  traverse() {
    // check if value is present
    if (this.value) {
      console.log(this.value);

      // check if node has children
      if (this.children.length !== 0) {
        // iterate through the children
        for (const child of this.children) {
          // check if value is present
          if (child.value) {
            console.log(child.value);

            // check if node has children
            if (child.children.length !== 0) {
              // iterate through the children
              for (const child1 of child.children) {
                // check if value is present
                if (child1.value) {
                  console.log(child1.value);

                  // check if node has children
                  if (child1.children.length !== 0) {
                    // continue the same thing over and over again...
                  }
                }
              }
            }
          }
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
tree.traverse();
