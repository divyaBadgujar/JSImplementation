import React from 'react'

export const ArrayDestructuring = () => {
    const [name, age, occupation] = ['John Doe', 30, 'Software Engineer'];
    const numbers = [1,2,3,4,5];
    const [first, second, third, fourth, fifth] = numbers;
    console.log(first);
    console.log(second);
  return (
    <div>ArrayDestructuring</div>
  )
}
