/* HASH TABLE
    - implement associative arrays or mapping of key value pairs
    - common to implement map data structure or objects
    - used for efficiency
    - AVG time for lookup is not tide to the # of elements tide to the table
    - Time complexity of O(1) for search, insert and delete
    - most language have built in HASH
    - in JS in is commonly use to implement objects*/

// example hash implementation
var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 14;
  }

  // Print the current state of the storage array
  print() {
    console.log(this.storage);
  }

  // Add a key-value pair to the hash table
  add(key, value) {
    const index = this.hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted) {
        this.storage[index].push([key, value]);
      }
    }
  }

  // Remove the key-value pair from the hash table
  remove(key) {
    const index = this.hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }

  // Look up the value associated with the key
  lookup(key) {
    const index = this.hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }

  // Hash function to get the index for a given key
  hash(key, limit) {
    // Simple hash function example (could be replaced with a more complex one)
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % limit;
  }
}

console.log(hash("quincy", 10));

let ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();
