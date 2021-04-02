// 10 --> 5 --> 16

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    },
    this.tail = {
      value: value,
      next: null
    },
    this.length = 1
  }
  append(value) {
    
  }
};

const newLinkedList = new LinkedList(10);
newLinkedList.append(5);
newLinkedList.append(16);

console.log(newLinkedList);