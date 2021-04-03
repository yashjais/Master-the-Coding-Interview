const util = require('util');
class Node {
  constructor(value) {
    this.node = {
      value: value,
      next: null,
      prev: null
    }
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    },
    this.tail = this.head,
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value);
    const node = newNode.node;
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    const node = newNode.node;
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(11);
myLinkedList.append(16);
myLinkedList.append(32);
myLinkedList.prepend(2);
console.log(util.inspect(myLinkedList, false, null, true))