class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.numberOfNodes++;
    this.adjacentList[node] = [];
  }

  reference(node) {
    return this.adjacentList[node];
  }

  addEdge(node1, node2) {
    // undirected graph
    const pointer = this.reference(node1);
    pointer.push(node2);
    const newPointer = this.reference(node2);
    newPointer.push(node1);
  }

  showConnection() {
    // not needed
  }
}
// {
//   0: [1, 2]
// }
const myGraph = new Graph();

myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');
console.log('graph', myGraph);