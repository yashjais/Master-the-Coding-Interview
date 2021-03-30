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

  keys() {
    const dataKeys = [];
    console.log('keys', this.data.length)
    if (!this.data.length) return dataKeys;
    this.data.forEach(data => {
      console.log('data', data)
      if (data && data.length > 1) {
        data.forEach(d => dataKeys.push(d[0]))
      }
      else {
       data && dataKeys.push(data[0][0]) 
      }
    });
    return dataKeys;
  }

  values() {
    // same as keys
  }

  entries() {
    // same as entrid
  }
}

const myHashTable = new HashTable(500);
// console.log(myHashTable._hash('hello'))
myHashTable.set('boom', 1);
myHashTable.set('ZOOM', 2);
myHashTable.set('GOOM', 3);
myHashTable.set('ROOM', 4);
myHashTable.set('lOOM', 5);
myHashTable.set('HELLO', 6);
myHashTable.set('gELLO', 7);
myHashTable.set('holi', 100)
// console.log('getting property', myHashTable.get('lOO'))
console.log('keys', myHashTable.keys())
// myHashTable.set('boom', 20)
