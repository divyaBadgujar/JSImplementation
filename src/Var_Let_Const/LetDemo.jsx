import React from 'react'

export const LetDemo = () => {
    let greeting = "say Hi";
    //let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
    let times = 4;
 
    if (times > 3) {
         let hello = "say Hello instead";
         console.log(hello);// "say Hello instead"
     }
   // console.log(hello) // hello is not defined
  return (
    <div>LetDemo</div>
  )
}
