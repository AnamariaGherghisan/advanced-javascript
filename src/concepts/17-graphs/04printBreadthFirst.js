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

  printBreadthFirst(startNode) {
    // populate the queue
    const queue = [startNode];

    // track visited
    const visited = [];

    // loop until queue is empty
    while (queue.length !== 0) {
      // dequeue value
      const node = queue.shift();

      // check if already visited
      if (visited.includes(node)) {
        continue;
      }

      // do something
      console.log(node);

      // update the visited list
      visited.push(node);

      // for each adjacent node
      this.nodes[node].forEach((node) => {
        // if node not already visited
        if (!visited.includes(node)) {
          // enqueue node
          queue.push(node);
        }
      });
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

graph.printBreadthFirst(1);
