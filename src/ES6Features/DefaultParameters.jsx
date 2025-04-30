import React from 'react'

const DefaultParameters = () => {
  function greet(name="Guest"){
    return `Hello ${name}`;
  }
  console.log(greet());
  console.log(greet('Alice'));
  return (
    <div>DefaultParameters</div>
  )
}

export default DefaultParameters