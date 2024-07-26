/* RECURSION */

// ex. factorial

const factorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(4));

const factorialString = (number) => {
  let output = "";
  for (let i = number; i > 0; i--) {
    if (i === 1) {
      output += i.toString();
    } else {
      output += `${i.toString()}*`;
    }
  }
  return output;
};

console.log(factorialString(5)); // 5*4*3*2*1
