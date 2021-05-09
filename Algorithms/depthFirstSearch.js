const util = require('util');

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value
  }
}

class BinarySearchTree {
  constructor (value) {
    this.root = value;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) return this.root = node;
    let pointer = this.root;
    while (true) {
      if (pointer.value > value) {
        if (!pointer.left) {
          pointer.left = node;
          return this;
        }
        pointer = pointer.left;
      } else if (pointer.value < value) {
        if (!pointer.right) {
          pointer.right = node;
          return this;
        }
        pointer = pointer.right;
      }
    }
  }

  depthFirstSearchIO(node, list) {
    // console.log(node.value, list)
    if (!node.left && !node.right) {
      list.push(node.value)
      return list;
    }
    if (node.left) {
      this.depthFirstSearchIO(node.left, list);
      // console.log('pushing left', node.value)
    }
    list.push(node.value);
    if (node.right) {
      this.depthFirstSearchIO(node.right, list);
      console.log('pushing right', node.value)
    }
    return list;
  }

  depthFirstSearchPreOrder(node, list) {
    console.log(node.value, list)
    if (!node.left && !node.right) {
      list.push(node.value)
      return list;
    }
    list.push(node.value);
    if (node.left) {
      this.depthFirstSearchPreOrder(node.left, list);
      // list.push(node.value);
    }
    if (node.right) {
      this.depthFirstSearchPreOrder(node.right, list);
      // list.push(node.value)
    }
    return list;
  }

  depthFirstSearchPO(node, list) {
    console.log(node.value, list)
    if (!node.left && !node.right) {
      list.push(node.value)
      return list;
    }
    if (node.left) {
      this.depthFirstSearchPO(node.left, list);
      // list.push(node.value);
    }
    if (node.right) {
      this.depthFirstSearchPO(node.right, list);
      // list.push(node.value)
    }
    list.push(node.value)
    return list;
  }
}

//     9
//  4    20
//1  6 15  170

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(20);
bst.insert(1);
bst.insert(6);
bst.insert(15);
bst.insert(170);
// console.log(bst.depthFirstSearchIO(bst.root, []))
// console.log(bst.depthFirstSearchPO(bst.root, []))
console.log(bst.depthFirstSearchPreOrder(bst.root, []))
// console.log(JSON.stringify(bst.root, null, 2));
 