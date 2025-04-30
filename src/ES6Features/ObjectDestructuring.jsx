import React from 'react'

export const ObjectDestructuring = () => {
    const person = {name:'divya',age:25}
    const {name,age} = person;
    console.log(name);
    console.log(age);
  return (
    <div>ObjectDestructuring</div>
  )
}
