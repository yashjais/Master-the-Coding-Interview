// I'll use array as my DS
class Node {
  constructor(value) {
    this.first = null,
    this.last = null,
    this.length = 0
  }
}

class QueuesUsingStacks {
  constructor() {
    this.arr = [];
  }
  push(value) {
    this.arr.push(value);
    return this.arr;
  }
  pop() {
    const node = this.arr.pop();
    return node;
  }
  peek() {
    return this.arr[0];
   
  }
  empty() {
    if (this.arr.length === 0) return true;
    return false;
  }
}

const myQuS = new QueuesUsingStacks();
myQuS.push(3);
myQuS.push(45);
myQuS.push(88);
myQuS.pop();
console.log(myQuS.peek());
console.log(myQuS);