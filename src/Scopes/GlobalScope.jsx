import React from 'react'

export const GlobalScope = () => {
    var greeting = 'Hello World!';
function greet() {
  console.log(greeting);
}
// Prints 'Hello World!'
greet();
  return (
    <div>GlobalScope</div>
  )
}
