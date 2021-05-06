class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BreadthFirstSearch {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        }
        else {
          currentNode.left = node;
          return;
        }        
      }
      else if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right
        }
        else {
          currentNode.right = node;
          return;
        }
      }
    }
    return this;
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let queue = [];
    let list = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(currentNode.value);
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left); 
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
}

//      9
//   4    11
// 2  5 10  12

const bfs = new BreadthFirstSearch();
bfs.insert(9);
bfs.insert(4);
bfs.insert(11);
bfs.insert(2);
bfs.insert(5);
bfs.insert(12);
bfs.insert(10);
console.log(bfs.breadthFirstSearch());
// console.log('bfs', JSON.stringify(bfs, null, 2));