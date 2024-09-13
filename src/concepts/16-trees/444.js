class Node {
  constructor(value) {
    // add value property
    this.value = value;

    // add left property
    this.left = null;

    // add right property
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // add root property
    this.root = null;
  }

  insert(value) {
    // create a new node for value
    const node = new Node(value);

    // check if root exists
    if (this.root === null) {
      // set node as root
      this.root = node;
    } else {
      let current = this.root;

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
  }

  display() {
    console.log(JSON.stringify(this, null, 2));
  }
}

const createBinarySearchTree = (arr) => {
  // create binarySearchTree instance
  const binarySearchTree = new BinarySearchTree();

  arr.forEach((value) => {
    binarySearchTree.insert(value);
  });

  return binarySearchTree;
};

const binarySearchTree = createBinarySearchTree([8, 3, 1, 6, 4, 7, 10, 14, 13]);

binarySearchTree.display();
