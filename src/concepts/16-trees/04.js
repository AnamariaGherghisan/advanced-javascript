class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    console.log(`Value: ${value}`);
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          // value already exists in the tree, do nothing
          return this;
        }
      }
    }
  }

  display() {
    console.log(JSON.stringify(this, null, 2));
  }
}

const createBinarySearchTree = (array) => {
  const binarySearchTree = new BinarySearchTree();

  array.forEach((element) => {
    binarySearchTree.insert(element);
    binarySearchTree.display();
  });

  return binarySearchTree;
};

const binarySearchTree = createBinarySearchTree([8, 3, 1, 6, 4, 7, 10, 14, 13]);
