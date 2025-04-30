import React from 'react'

export const ForInLoop = () => {
    const iterable = [ 3, 7, 90,54];

    for(let x in iterable)
    {
        console.log(x);
    }
  return (
    <div>ForInLoop</div>
  )
}
