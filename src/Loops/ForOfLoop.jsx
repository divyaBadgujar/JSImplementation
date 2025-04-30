import React from 'react'

export const ForOfLoop = () => {
    const iterable = [10,12, 33, 64, 55];

    for(let x of iterable)
    {
        console.log(x);
    }
  return (
    <div>ForOfLoop</div>
  )
}
