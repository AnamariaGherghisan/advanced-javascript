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

  search(value) {
    let current = this.root;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null; // if not found
  }

  // Helper method to find the minimum value node in a subtree
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Delete a node from the BST
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      // Node to be deleted found

      // Case 1: No child
      if (node.left === null && node.right === null) {
        return null;
      }

      // Case 2: One child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Case 3: Two children
      const tempNode = this.findMinNode(node.right);
      node.value = tempNode.value;
      node.right = this._removeNode(node.right, tempNode.value);
      return node;
    }
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

console.log(binarySearchTree.search(6)); // Node with value 6
console.log(binarySearchTree.search(20)); // null, not found

binarySearchTree.remove(6);
console.log(binarySearchTree.search(7)); // null, as node with value 5 was removed
