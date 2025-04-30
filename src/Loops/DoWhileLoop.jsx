import React from 'react'

export const DoWhileLoop = () => {
    let i = 3;

    // do...while loop
    do {
        console.log(i);
        i--;
    } while (i > 0);
  return (
    <div>DoWhileLoop</div>
  )
}
