import React from 'react'

export const NestedScope = () => {
    var name = 'Peter';
function greet() {
  var greeting = 'Hello';
  {
    let lang = 'English';
    console.log(`${lang}: ${greeting} ${name}`);
  }
}
greet();
  return (
    <div>NestedScope</div>
  )
}
