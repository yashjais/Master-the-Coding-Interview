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
  validate() {
    let queue = [];
    let list = [];
    queue.push(this.root);
    this.validateBST(queue, list);
    return list;
  }

  validateBST (queue, list) {
    if (queue.length === 0) {
      return list;
    }
    let node = queue.shift();
    list.push(node.value);
    if (node.left) {
      if (node.left.value < node.value) {
        queue.push(node.left);
      }
      else {
        console.log('in the else', node.left.value, node.value)
        return false;
      }
    }
    if (node.right) {
      if (node.right.value > node.value) {
        queue.push(node.right);
      }
      else {
        return false;
      }
    };
    return this.validateBST(queue, list);
  }

  vBST(arr) {
    let j = 0;
    for (let i = 0; i < arr.length - j -2; i++) {
      j = i;

      console.log(i, j, arr[i], arr[i + 1 + j], arr[i + 2 + j])
      if (arr[i] && arr[i + 1 + j] && arr[i] < arr[i + 1 + j]) {
        console.log(arr[i], arr[i + 1 + j])
        return false;
      }
      if (arr[i] && arr[i + 1 + j] && arr[i] > arr[i + 2 + j]) {
        console.log(arr[i], arr[i + 2 + j])
        return false;
      }
    }
    return true;
  }
}

//        9
//     4    15
//   2  5 13  20
// 1 3   12 14

// 9 4 15 2 5 13 20 1 3 null null 12 14 null null
const bfs = new BreadthFirstSearch();
// bfs.insert(2);
// bfs.insert(1);
// bfs.insert(3);
// bfs.insert(2);
// bfs.insert(5);
// bfs.insert(20);
// bfs.insert(10);
// bfs.insert(12);
// bfs.insert(14);
// console.log(bfs.breadthFirstSearch());
// console.log(bfs.breadthFirstSearchR([bfs.root], []));
// console.log('bfs', JSON.stringify(bfs, null, 2));
console.log('validate', bfs.vBST([5,1,4,null,null,3,6]));
