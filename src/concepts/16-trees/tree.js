export class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const tree = new Tree(value);
    this.children.push(tree);
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];

      if (child.contains(value)) {
        return true;
      }
    }

    return false;
  }

  traverse(fn) {
    fn(this);

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];

      child.traverse(fn);
    }
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    for (let i = 0; i < this.children.length; i++) {
      const childFound = this.children[i].find(value);

      if (childFound) {
        return childFound;
      }
    }

    return null;
  }
}
