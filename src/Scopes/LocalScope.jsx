import React from 'react'

export const LocalScope = () => {
    function greet() {
        var greeting = 'Hello World!';
        console.log(greeting);
      }
      // Prints 'Hello World!'
      greet();
      // Uncaught ReferenceError: greeting is not defined
      //console.log(greeting);
  return (
    <div>LocalScope</div>
  )
}
