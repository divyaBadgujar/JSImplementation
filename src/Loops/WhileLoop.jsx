import React from 'react'

export const WhileLoop = () => {
    let num = 0, sum = 0;

// loop as long as num is 0 or positive
while (num >= 0) {

    // add all positive numbers
    sum += num;

    // take input from the user
    num = parseInt(prompt("Enter a number: "));
}

// last, display sum
console.log(`The sum is ${sum}`);
  return (
    <div>WhileLoop</div>
  )
}
