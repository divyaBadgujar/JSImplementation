import React from 'react'

export const ImpureFunction = () => {
    let counter = 0;

function incrementCounter() {
    counter += 1;
    return counter;
}

console.log(incrementCounter()); // Returns 1
console.log(incrementCounter()); // Returns 2 (different result with same input)

  return (
    <div>ImpureFunction</div>
  )
}
