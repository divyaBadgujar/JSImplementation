import React from 'react'

export const AnonymousFunction = () => {
    let add = function(a, b) {
        return a + b;
      };
      console.log(add(2, 3));
  return (
    <div>AnonymousFunction</div>
  )
}
