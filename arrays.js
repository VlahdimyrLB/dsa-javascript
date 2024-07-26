/* ARRAYS - easy way of storing items, listing objects
          - is a data structure that we used to represent listof items*/
// 0 based
// [] - array literal
// JS arrays are dynamic, they can be changed in runtime
// also the type of data in the array is dynamic (can be number or string or object literal)
// array is an object in JS

let selectedColors = ["red", "blue"];

console.log(selectedColors); // [ 'red', 'blue' ]

// bracket notation to acces by index
console.log(selectedColors[0]); // red

// add color
selectedColors[2] = "green";
console.log(selectedColors); // [ 'red', 'blue', 'green' ]

// we can access object properties using dot . notation
console.log(selectedColors.length); // 3

/* 2D ARRAYS - multi-dimensional array that stores a matrix of data in rows and columns.
            - Useful for games, spreadsheets, or representing images */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// print the elements of the array using for..of loop
for (let row of matrix) {
  const rowString = row.join(" ");
  console.log(rowString);
}
// 1 2 3
// 4 5 6
// 7 8 9

// to access data use two bracket notation: one for row, one for column
matrix[0][0] = "X";
matrix[0][1] = "O";
matrix[0][2] = "X";

matrix[1][0] = "O";
matrix[1][1] = "X";
matrix[1][2] = "O";

matrix[2][0] = "X";
matrix[2][1] = "O";
matrix[2][2] = "X";

for (let row of matrix) {
  const rowString = row.join(" ");
  console.log(rowString);
}
// X O X
// O X O
// X O X
