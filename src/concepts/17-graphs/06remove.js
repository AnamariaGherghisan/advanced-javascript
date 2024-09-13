class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(value) {
    if (!this.nodes[value]) {
      this.nodes[value] = [];
    }
  }

  addEdge(node1, node2) {
    //add nodes if they don't exist yet
    this.addNode(node1);
    this.addNode(node2);

    // check if not included
    if (!this.nodes[node1].includes(node2)) {
      this.nodes[node1].push(node2);
    }

    // check if not included
    if (!this.nodes[node2].includes(node1)) {
      this.nodes[node2].push(node1);
    }
  }

  removeEdge(node1, node2) {
    this.nodes[node1] = this.nodes[node1].filter((e) => e !== node2);
    this.nodes[node2] = this.nodes[node2].filter((e) => e !== node1);
  }

  removeNode(value) {
    // check if nodes has value
    if (this.nodes[value]) {
      // loop through my adjacent nodes
      this.nodes[value].forEach((node) => {
        // remove the edge in each adjacent node
        this.removeEdge(value, node);
      });

      delete this.nodes[value];
    }
  }
}

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

graph.addEdge(1, 2);
graph.addEdge(1, 5);

graph.addEdge(2, 1);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

graph.addEdge(3, 2);
graph.addEdge(3, 4);

graph.addEdge(4, 2);
graph.addEdge(4, 3);
graph.addEdge(4, 5);

graph.addEdge(5, 1);
graph.addEdge(5, 4);

console.log(graph);

graph.removeNode(1);

console.log(graph);
