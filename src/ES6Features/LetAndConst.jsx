import React from 'react'

export const LetAndConst = () => {
    function testScope(){
        if(true){
            let x=10;
            const y=20;
            console.log(x);
            console.log(y);
        }
        // console.log(x);
        // console.log(y);
    }
    testScope();
  return (
    <div>LetAndConst</div>
  )
}
