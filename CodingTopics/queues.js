/* QUEUE - way to hold data
         - First In, First Out (FIFO)
         - just like stack we can implement QUEUE with just an array */

class Queue {
  constructor() {
    this.collection = []; // collect all items in the queue
  }

  print() {
    console.log(this.collection);
  }

  // enqueue - push firts item into the queue
  enqueue(element) {
    return this.collection.push(element);
  }

  // dequeue - take an item off the queue
  dequeue(element) {
    return this.collection.shift(element); // removes first item in the array
  }

  // front return the first item in the array not remove
  front() {
    return this.collection[0];
  }

  // size of collection
  size() {
    return this.collection.length;
  }

  // return if empty
  isEmpty() {
    return this.collection.length === 0;
  }
}

var queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.print(); // [ 'a', 'b', 'c' ]
queue.dequeue(); // removes the beginnin which is b
console.log(queue.front()); // b
queue.print(); // [ 'b', 'c' ]

// PRIORITY QUEUE - pass the element and priority in to the queue
// everything is same with queue except ENQUEUE and DEQUEUE
class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  // enqueue - push first item into the queue based on priority
  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element); // If the queue is empty, add the element directly
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        // Check if the new element has higher priority than the current element
        if (element[1] < this.collection[i][1]) {
          // Insert the new element at the correct position based on its priority
          // inserts the element at index i and shifts all subsequent elements one position to the right.
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element); // If not added yet, add the element at the end
      }
    }
  }

  // dequeue - remove the element with the highest priority (the first element in the array)
  dequeue() {
    let value = this.collection.shift(); // Remove the first element
    return value[0]; // Return the value part of the element
  }

  // front return the first item in the array not remove
  front() {
    return this.collection[0];
  }

  // size of collection
  size() {
    return this.collection.length;
  }

  // return if empty
  isEmpty() {
    return this.collection.length === 0;
  }
}

let pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);

pq.print();
// [
//   ["Ewa Mitulska-Wójcik", 1],
//   ["Beau Carnes", 2],
//   ["Briana Swift", 2],
//   ["Quincy Larson", 3],
// ];

pq.dequeue();
console.log(pq.front()); // [ 'Beau Carnes', 2 ]
pq.print(); // [ [ 'Beau Carnes', 2 ], [ 'Briana Swift', 2 ], [ 'Quincy Larson', 3 ] ]
