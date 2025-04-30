import React from 'react'

export const VarDemo = () => {
    console.log(greeter);
    var greeter = "hey hi";
    var greeter="Say something to me";
    function newFunction() {
        var hello = "hello";
        console.log(hello)
    }
    //console.log(hello);
    console.log(greeter)
    newFunction();
  return (
    <div>VarDemo</div>
  )
}
