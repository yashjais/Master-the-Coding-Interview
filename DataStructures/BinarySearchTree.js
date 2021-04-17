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
  lookup() {
    // do something
  }
  remove() {
    // do something
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(20);
bst.insert(1);
bst.insert(6);
bst.insert(15);
bst.insert(120);
bst.insert(110);
bst.insert(121);
// console.log(JSON.stringify(traverse(bst.root)));
console.log(util.inspect(bst, false, null, true));

function traverse (node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}