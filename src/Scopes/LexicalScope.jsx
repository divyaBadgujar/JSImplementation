import React from 'react'

export const LexicalScope = () => {
    let number = 42;
function printNumber() {
  console.log(number);
}
function log() {
  let number = 54;
  printNumber();
}
// Prints 42
log();
  return (
    <div>LexicalScope</div>
  )
}
