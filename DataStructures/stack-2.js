// implementation in array
const util = require('util');

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
    // console.log(this.array[this.array.length - 1]);
  }

  push(value) {
    // check input
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
// console.log(myStack.peek());
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
// console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
// console.log(myStack.peek());

console.log(util.inspect(myStack, false, null, true));


// Discord
// Udemy
// Google