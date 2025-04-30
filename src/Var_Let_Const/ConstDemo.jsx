import React from 'react'

export const ConstDemo = () => {
    const greeting = "say Hi";
    //greeting = "say Hello instead";// error: Assignment to constant variable.

    //const greeting = "say Hi";
   // const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
  return (
    <div>ConstDemo</div>
  )
}
