// STACK - last In, First Out (LIFO)
// functions: push, pop, peek, length
// we can implement STACK with just an array

// Array Stack - since arrays have all the funciton of a stack
// simple example to understand stacks with palindrome

let letters = []; // this is the array stack
let word = "racecar";
let reversedWord = "";

// put letter words into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  reversedWord += letters.pop();
}

if (word === reversedWord) {
  console.log(word + " is a plaindrome ");
} else {
  console.log(word + " is not a plaindrome ");
}

// ACTUAL STACK using ES6 Class
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // Adds a value onto the end of stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // removes and returns the value at the end of the stack
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  // return the value at the end of stack
  peek() {
    return this.storage[this.count - 1];
  }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.peek()); // 1

myStack.push("Vlahd learns stacks xd");

console.log(myStack.size()); // 2
console.log(myStack.peek()); // Vlahd learns stacks xd
