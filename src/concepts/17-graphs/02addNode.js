class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(value) {
    // if node does not exist
    if (!this.nodes[value]) {
      // add node and set value to []
      this.nodes[value] = [];
    }
  }
}

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

console.log(graph);
