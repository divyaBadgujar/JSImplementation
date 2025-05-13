import React from 'react'

export const Filter = () => {
    const users = [
        { id: 1, fname: 'John',lname:'Doe', age: 26 },
        { id: 2, fname: 'Jane',lname:'dark', age: 30 },
        { id: 3, fname: 'Bob',lname:'thomson', age: 35 },
        { id: 4, fname: 'Priyanka',lname:'Jonas', age: 26 },
    ];

    let output = users.filter((x)=> x.age < 30 )
                      .map((x)=>x.fname);

    console.log(output);
  return (
    <div>Filter</div>
  )
}
