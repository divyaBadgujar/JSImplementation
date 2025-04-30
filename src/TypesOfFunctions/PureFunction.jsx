import React from 'react'

export const PureFunction = () => {
    function add(a, b) {
        return a + b;
    }
    
    console.log(add(2, 3)); // Always returns 5
    console.log(add(2, 3)); // Always returns 5
    
  return (
    <div>PureFunction</div>
  )
}
