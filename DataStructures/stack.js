const util = require('util');

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null,
    this.bottom = null,
    this.length = 0;
  }
  peek() {
    return this.top;
    // console.log(this.top);
  }
  push(value) {
    // check input
    const node = new Node(value);
    node.next = this.top;
    if (this.top === null) {
      this.bottom = node
    }
    // console.log(node);
    this.top = node;
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    };
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top.next;
    this.top = holdingPointer;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
// console.log(myStack.peek());
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack.peek());

console.log(util.inspect(myStack, false, null, true));


// Discord
// Udemy
// Google