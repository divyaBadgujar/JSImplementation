import React from 'react'

export const ScopeChain = () => {
    let foo = 'foo';
function bar() {
  let baz = 'baz';
  // Prints 'baz'
  console.log(baz);
  // Prints 'foo'
  console.log(foo);
  var number = 42;
  console.log(number);  // Prints 42
}
bar();
  return (
    <div>ScopeChain</div>
  )
}
