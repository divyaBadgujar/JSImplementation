import React from 'react'

export const BlockScope = () => {
    {
        let greeting = 'Hello World!';
        var lang = 'English';
        console.log(greeting); // Prints 'Hello World!'
      }
      // Prints 'English'
      console.log(lang);
      // Uncaught ReferenceError: greeting is not defined
    //   console.log(greeting);
  return (
    <div>BlockScope</div>
  )
}
