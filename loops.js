/* LOOPS */

/* WHILE LOOP */

// 'while' loop
// The 'while' loop executes a block of code as long as the specified condition evaluates to true.
// Make sure to increment or change the condition within the loop to avoid an infinite loop.
let i = 0;
while (i < 3) {
  console.log(i); // Output: 0, 1, 2

  i++; // Increment index to eventually meet the exit condition and avoid infinite loop
}

// FOR-loop
// The classic 'for' loop is a versatile loop that allows you to iterate over a block of code a specified number of times.
// It consists of three parts: initialization, condition, and increment/decrement.
for (let i = 0; i < 3; i++) {
  console.log("Loop " + i); // Output: Loop 0, Loop 1, Loop 2
}

// You can also use the 'for' loop for decrementing the index or controlling the loop in other ways.
for (let i = 5; i > 0; i--) {
  console.log("decrement " + i); // Output: decrement 5, decrement 4, decrement 3, decrement 2, decrement 1

  // 'break' statement exits the loop early when a condition is met.
  if (i === 3) break; // Exits the loop when i equals 3
}

// Loop through an array using 'for' loop
// This method is useful when you need to access both the index and the value of each element in the array.
const names = ["vlahd", "shar", "mizuki"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]); // Output: vlahd, shar, mizuki
}

// 'for...of' loop
// The 'for...of' loop simplifies iteration over iterable objects like arrays, strings, and more.
// It's generally easier to use for arrays but can be slower than the traditional 'for' loop for very large arrays.
for (let name of names) {
  console.log(name); // Output: vlahd, shar, mizuki
}

// 'for...in' loop
// The 'for...in' loop is used to iterate over the enumerable properties of an object.
// It should be used when you need to access the keys of an object.
const user = { firstName: "vlahd", lastName: "goody" };

for (let key in user) {
  console.log(user[key]); // Output: vlahd, goody
}

/* NESTED LOOPS and multi-dimentional array and objects */

let twoD = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

// nested for loop

// get how many element inside of array
// to tell how many times the outer loop has to loop
let rows = twoD.length;

for (i = 0; i < rows; i++) {
  let items = twoD[i].length; // get length of inner array
  // loop through the inner array

  // console.log(i, items); // for checking
  for (let j = 0; j < items; j++) {
    console.log(twoD[i][j]);
  }
}

let dateWho = {
  characters: [
    { name: "Kurumi" },
    { name: "Emilia" },
    { name: "Kaguya" },
    { name: "Raiden" },
  ],
};

// we can access using dot notation or bracket( dateWho.characters or dateWho['characters'] )
const { characters } = dateWho;
for (let i = 0; i < characters.length; i++) {
  console.log(characters[i].name);
}

// reversing array
const arr = [1, 2, 3, 4, 5];

console.log(arr.reverse());

let rev = [];

for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}
console.log(rev);

// reversing a two d array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// matrix.forEach((e) => e.reverse()); // reversed each item in the array usiing predefined

let revMatrix = [];

for (let i = matrix.length - 1; i >= 0; i--) {
  let reversedRow = [];

  let count = matrix[i].length;

  for (j = count - 1; j >= 0; j--) {
    reversedRow.push(matrix[i][j]);
  }

  revMatrix.push(reversedRow);
}

console.log(revMatrix); // [ [ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1 ] ]
