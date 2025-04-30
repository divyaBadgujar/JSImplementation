import React from 'react'

export const FirstClassFunction = () => {
    //Assigning a Function to a Variable:
    const greet = function(name) {
        return `Hello, ${name}!`;
    };
    
    console.log(greet("Alice")); // Output: Hello, Alice!

   // Passing a Function as an Argument:
    function sayHello() {
        return "Hello!";
    }

    function greetUser(greetingFunction) {
        console.log(greetingFunction());
    }
    greetUser(sayHello); // Output:Hello!

    //Returning a Function from Another Function:
    function createGreeting(greeting) {
        return function(name) {
            return `${greeting}, ${name}!`;
        };
    }

    const sayHi = createGreeting("Hi");
    console.log(sayHi("Bob")); // Output: Hi, Bob!
        
  return (
    <div>FirstClassFunction</div>
  )
}
