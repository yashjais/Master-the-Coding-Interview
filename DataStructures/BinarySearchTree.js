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
  lookup(value) {
    if (!this.root || !value) return null;
    let pointer = this.root;
    while(true) {
      if (!pointer) return false;
      if (pointer.value === value) {
        return pointer;
      }
      else if (pointer.value > value) {
        pointer = pointer.left;
      }
      else if (pointer.value < value) {
        pointer = pointer.right;
      }
    }
    return false;
  }
  remove(value) {
    if (!this.root || !value) return false;
    let currentNode = this.root;
    let parentNode = null;
    
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      else if (value === currentNode.value) {
        console.log(parentNode, currentNode)
        // value matched, now magic will happen here

        // case 1 -- no successor(right child)
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          }
          else {
            // checking if the current node is in right or left of parent node
            if (parentNode.right.value === value) {
              parentNode.right = currentNode.left;
            } else {
              parentNode.left = currentNode.left;
            }
          }
          return this;
        }

        // case 2 -- right child doesn't have a left child
        else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.right;
          }
          else {
            // checking if the current node is in right or left of parent node
            if (parentNode.right.value === value) {
              parentNode.right = currentNode.right;
            } else {
              parentNode.left = currentNode.right;
            }
          }
          return this;
        }

        // case 3 -- right have a left child
        // now there will be three cases within
        else {

        }
      }

    }
    return false;
  }
}

const bst = new BinarySearchTree();
bst.insert(62);
bst.insert(68);
bst.insert(70);
// bst.insert(70);
// bst.insert(73);
// bst.insert(72);
// bst.insert(70);
// console.log(util.inspect(bst, false, null, true))
// bst.remove(78);
console.log(util.inspect(bst.remove(62), false, null, true));
// console.log(bst.lookup(23));
// console.log(JSON.stringify(traverse(bst.root)));
// console.log(util.inspect(bst, false, null, true));

function traverse (node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}