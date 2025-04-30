import React from 'react'

export const FunctionExpression = () => {
    const greet = function(name) {
        return `Hello, ${name}!`;
    };
    console.log(greet("Ananya"));
    
  return (
    <div>FunctionExpression</div>
  )
}
