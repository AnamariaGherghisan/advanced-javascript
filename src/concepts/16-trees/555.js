class BinarySearchTree {
  constructor(value) {
    // add value property
    this.value = value;

    // add left property
    this.left = null;

    // add right property
    this.right = null;
  }

  insert(value) {
    // create a new node for value
    const node = new BinarySearchTree(value);

    let current = this;

    while (true) {
      // check if value is lesser than current value
      if (value < current.value) {
        // move left
        // check if left node is null in current node
        if (current.left === null) {
          // assign the left node of current to node
          current.left = node;
          return;
        } else {
          // assign the current node as the current left node
          current = current.left;
        }
      } else if (value > current.value) {
        // move right
        // check if right node is null in current node
        if (current.right === null) {
          // assign the right node of current to node
          current.right = node;
          return;
        } else {
          // assign the current node as the current right node
          current = current.right;
        }
      } else {
        return;
      }
    }
  }

  // method to search for a given value
  search(value) {
    let current = this;

    while (current !== null) {
      // check if value is less than current value
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }

    return null;
  }

  displayPreOrder() {
    console.log(this.value);

    // do left child
    if (this.left) {
      this.left.displayPreOrder();
    }

    // do right child
    if (this.right) {
      this.right.displayPreOrder();
    }
  }

  display() {
    console.log(JSON.stringify(this, null, 2));
  }
}

const createBinarySearchTree = (arr) => {
  // create binarySearchTree instance
  const binarySearchTree = new BinarySearchTree(8);

  arr.forEach((value) => {
    binarySearchTree.insert(value);
  });

  return binarySearchTree;
};

const binarySearchTree = createBinarySearchTree([3, 1, 6, 4, 7, 10, 14, 13]);

binarySearchTree.display();

const node = binarySearchTree.search(8);
console.log(node);

binarySearchTree.displayPreOrder();
