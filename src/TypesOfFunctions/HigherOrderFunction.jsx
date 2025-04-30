import React from 'react'

export const HigherOrderFunction = () => {
    function compose(f, g) {
        return function (x) {
            return f(g(x));
        };
    }
    
    const add1 = x => x + 1;
    const multiply2 = x => x * 2;
    
    const add1ThenMultiply2 = compose(multiply2, add1);
    
    console.log(add1ThenMultiply2(5)); // 12
    
  return (
    <div>HigherOrderFunction</div>
  )
}
