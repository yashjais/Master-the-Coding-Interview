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
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    if (this.data[address].length >= 1) {
      const findData = this.data[address];
      const data = findData.find(data => data[0] === key);
      if (data) return data[1];
      return undefined;
    }
    return undefined;
  }
}

const myHashTable = new HashTable(2);
// console.log(myHashTable._hash('hello'))
myHashTable.set('boom', 1);
myHashTable.set('ZOOM', 2);
myHashTable.set('GOOM', 3);
myHashTable.set('ROOM', 4);
myHashTable.set('lOOM', 5);
myHashTable.set('HELLO', 6);
myHashTable.set('gELLO', 7);
console.log('getting property', myHashTable.get('lOO'))
// myHashTable.set('boom', 20)
