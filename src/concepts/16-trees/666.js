class BinarySearchTree {
  constructor(value) {
    // add value property
    this.value = value;
    // add left property
    this.left = null;
    // add right property
    this.right = null;
  }

  // method to insert value
  insert(value) {
    // check if value is lesser
    if (value < this.value) {
      // check if left does not node exists
      if (this.left === null) {
        // add new node to left
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
    // check if value is greater
    else if (value > this.value) {
      // check if right node does not exists
      if (this.right === null) {
        // add new node to right
        this.right = new BinarySearchTree(value);
      } else {
        // call insert on right node
        this.right.insert(value);
      }
    }
    // check if value is equal
    else {
      return;
    }
  }

  printBreadthFirst() {
    // initialise queue
    const queue = [];

    // add root to the queue
    queue.push(this);

    while (queue.length) {
      // get from queue
      const node = queue.shift();

      // do something
      console.log(node.value);

      // check left
      if (node.left) {
        // add to queue
        queue.push(node.left);
      }

      // check right
      if (node.right) {
        // add to queue
        queue.push(node.right);
      }
    }
  }

  printPreOrder() {
    // do something
    console.log(this.value);

    // check if left node is present
    if (this.left) {
      // printPreOrder for left node
      this.left.printPreOrder();
    }

    // check if right node is present
    if (this.right) {
      // printPreOrder for right node
      this.right.printPreOrder();
    }
  }
}

const binarySearchTree = new BinarySearchTree(8);

binarySearchTree.insert(3);
binarySearchTree.insert(10);
binarySearchTree.insert(1);
binarySearchTree.insert(6);
binarySearchTree.insert(14);
binarySearchTree.insert(4);
binarySearchTree.insert(7);
binarySearchTree.insert(13);

binarySearchTree.printPreOrder();
binarySearchTree.printBreadthFirst();
