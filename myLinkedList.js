// 10 --> 5 --> 16
const util =  require('util');

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    },
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  traverseList(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(value, index) {
    if (!value || !index || index === 0 || index >= this.length) return 'Give Proper Value/Index';

    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseList(index - 1);
    const reference = leader.next;
    leader.next = newNode;
    newNode.next = reference;
    this.length++;
    return this;
  }

  remove(index) {
    if(index >= this.length || index === 0) return 'Invalid Index';
    const leader = this.traverseList(index - 1);
    const node = leader.next;
    leader.next = node.next;
    this.length--;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
};

/* [10, 5, 16, 12] */
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(12);
// myLinkedList.prepend(11);
// myLinkedList.insert(99, 2);
myLinkedList.remove(1);
// console.log(util.inspect(myLinkedList, false, null, true))
console.log(myLinkedList.printList());