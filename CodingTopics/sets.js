/* SETS - no order, no duplicate
        - check presence of an item
        - ES6 has built set function (but doesnt have the complete methods)
        - ES6 sets only has methods: values, add, delete(remove) and size(property not method) */

// mySet is just a name but can be called just Set
class mySet {
  constructor() {
    this.collection = []; // will hold the set
  }

  // check the presence of an element, returns true or false
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  // return all values of the set
  values() {
    return this.collection;
  }

  // add an element to the set if it's unique
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  // remove an element from the set if it exists
  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // return size of the collection
  size() {
    return this.collection.length;
  }

  // return union of two sets
  // Union - combines two sets but leaves out any duplicates
  union(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values(); // from THIS.values
    let secondSet = otherSet.values(); // from the object

    firstSet.forEach((element) => unionSet.add(element));
    secondSet.forEach((element) => unionSet.add(element));

    return unionSet;
  }

  // return intersection of two sets
  intersection(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach((element) => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  }

  // return the difference of two sets
  difference(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach((element) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  }

  // will test if the set is a subset of a different set
  // or if first set is contained within the second set
  subset(otherSet) {
    let firstSet = this.values();

    // every checks if every element passes the implement function otherSet.has(value)
    // or are all firstSet elements in the otherSet
    return firstSet.every((value) => otherSet.has(value));
  }
}

let setA = new mySet();
let setB = new mySet();

setA.add("A");
setB.add("A");
setB.add("B");
setB.add("C");
setB.add("D");

console.log(setA.subset(setB)); // true
console.log(setA.intersection(setB).values()); // [ 'A' ]
console.log(setA.difference(setB).values()); // []
console.log(setB.difference(setA).values()); // [ 'B', 'C', 'D' ]

// using JS Set - is a collection of unique values.
let setC = new Set();
let setD = new Set();

setC.add("E");
setD.add("E");
setD.add("F");
setD.add("G");
setD.add("H");
console.log(setD.values()); // [Set Iterator] { 'E', 'F', 'G', 'H' }

// iterate using for...of loop
let text = "";
for (const val of setD) {
  text += val;
}
console.log(text); // EFGH

// using forEach and Array.from
let objD = Array.from(setD.values());
let arrayD = [];
objD.forEach((element) => arrayD.push(element));
console.log(arrayD); // ['E', 'F', 'G', 'H']

console.log(setC.delete("E")); // true
console.log(setC.has("E")); // false

// add in JS Set doesnt return true or false, it logs the set itself
console.log(setD.add("A")); //Set(5) { 'E', 'F', 'G', 'H', 'A' }
