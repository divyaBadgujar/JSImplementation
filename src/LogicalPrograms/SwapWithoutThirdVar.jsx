import React from 'react'

export const SwapWithoutThirdVar = () => {
    function swapping(){
        let a = 10;
        let b = 20;
        console.log(a);
         console.log(b);
         a=a+b;
         b=a-b;
         a=a-b;
         console.log(a);
         console.log(b);
    }
    swapping();
  return (
    <div>SwapWithoutThirdVar</div>
  )
}
