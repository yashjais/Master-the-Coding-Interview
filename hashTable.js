class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) %  this.data.length;
    }
    return hash
  }

  set(key, value) {
    const address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    console.log(this.data)
  }

  get(value) {
    const key = this._hash(value);
    return this.data[key];
  }
}

const myHashTable = new HashTable(50);
// console.log(myHashTable._hash('hello'))
myHashTable.set('boom', 10000)
// myHashTable.set('boom', 20)
