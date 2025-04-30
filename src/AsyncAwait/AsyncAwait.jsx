import React from 'react'

export const AsyncAwait = () => {
    const getData = async () => {
        let y = await "Hello World";
        console.log(y);
    }
    
    console.log(1);
    getData();
    console.log(2);
    
  return (
    <div>AsyncAwait</div>
  )
}
