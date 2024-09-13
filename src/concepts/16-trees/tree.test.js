import { Tree } from "./tree";

let tree = null;

describe("Tree", () => {
  beforeEach(() => {
    tree = new Tree(1);
  });
  describe("The add child method", () => {
    test("should add children to the tree", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.addChild(4);
      expect(tree.children.length).toBe(3);
      expect(tree.children[0]).toBeInstanceOf(Tree);
    });
  });
  describe("The contains method", () => {
    test("should return true if the value is in the children", () => {
      tree.addChild(2);
      expect(tree.contains(2)).toBe(true);
    });
    test("should return true if the value is in the second child", () => {
      tree.addChild(2);
      tree.addChild(3);
      expect(tree.contains(3)).toBe(true);
    });
    test("should return false if the value is not in the children", () => {
      tree.addChild(2);
      expect(tree.contains(3)).toBe(false);
    });
    test("should correctly detect nested grandchildren and great-grandchildren", () => {
      tree.addChild(2);
      tree.children[0].addChild(20);
      tree.children[0].children[0].addChild(200);
      expect(tree.contains(20)).toBe(true);
      expect(tree.contains(30)).toBe(false);
      expect(tree.contains(200)).toBe(true);
      expect(tree.contains(300)).toBe(false);
    });
  });
  describe("The traverse method", () => {
    test("should correctly apply the function to all children and nested children", () => {
      let test = [];
      tree.addChild(2);
      tree.children[0].addChild(20);
      tree.children[0].children[0].addChild(200);
      tree.traverse((e) => test.push(e.value));
      expect(test).toEqual([1, 2, 20, 200]);
    });
  });
  describe("The find method", () => {
    test("should return the node if the value is in the children", () => {
      tree.addChild(2);
      let found = tree.find(2);

      expect(found instanceof Tree).toBe(true);
      expect(found.value).toBe(2);
    });
    test("should return null if the value is not in the children", () => {
      tree.addChild(2);
      expect(tree.find(3)).toBe(null);
    });
    test("should correctly detect nested grandchildren and great-grandchildren", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.children[1].addChild(20);
      tree.children[1].children[0].addChild(200);

      expect(tree.find(20).value).toBe(20);
      expect(tree.find(30)).toBe(null);
      expect(tree.find(200).value).toBe(200);
      expect(tree.find(300)).toBe(null);
    });
  });

  describe("The insertChildUnder method", () => {
    test("should return the node if added", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.addChild(4);
      const found = tree.insertChildUnder(3, 5);
      expect(found).toBeInstanceOf(Tree);
      expect(found.value).toBe(5);
    });
    test("should return null if the refValue is not found", () => {
      tree.addChild(2);
      expect(tree.insertChildUnder(3)).toBe(null);
    });
    test("should add the node under the refValue node", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.addChild(4);
      tree.insertChildUnder(3, 5);
      expect(tree.children[1].children[0].value).toBe(5);
    });
  });

  describe("The insertBetween method", () => {
    test("should return null if the refValue is not found", () => {
      tree.addChild(2);
      tree.children[0].addChild(20);
      expect(tree.insertBetween(3, 20, 200)).toBe(null);
    });
    test("should return null if the childValue is not found", () => {
      tree.addChild(2);
      tree.children[0].addChild(20);
      expect(tree.insertBetween(2, 30, 200)).toBe(null);
    });
    test("should return the newNode if added", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.children[0].addChild(20);

      const newNode = tree.insertBetween(2, 20, 200);

      expect(newNode).toBeInstanceOf(Tree);

      expect(newNode.value).toBe(200);
    });
    test("should correctly insert the new node after the refValue node", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.children[0].addChild(20);

      let newNode = tree.insertBetween(2, 20, 200);

      expect(tree.children[0].value).toBe(2);
      expect(tree.children[0].children[0].value).toBe(200);
    });

    test("should correctly attach the branch under the new node", () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.children[0].addChild(20);

      let newNode = tree.insertBetween(2, 20, 200);

      expect(tree.children[0].children[0].children[0].value).toBe(20);
    });
  });
});
