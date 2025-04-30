import React from 'react'

export const Clouser = () => {
    let b=10;
    function outer(){
        let b=100;
        function inner(){
            let b=1000;
            console.log(b)
        }
        return inner;
    } 
   let clouser =  outer();
   clouser();
  return (
    <div>Clouser</div>
  )
}
