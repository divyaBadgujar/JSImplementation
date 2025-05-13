import React from 'react'

export const Map = () => {
    const users = [
        { id: 1, fname: 'John',lname:'Doe', age: 25 },
        { id: 2, fname: 'Jane',lname:'dark', age: 30 },
        { id: 3, fname: 'Bob',lname:'thomson', age: 35 },
    ];

    //output - ['John Doe', 'Jane dark', 'Bob thomson']
    const names = users.map(user => user.fname + ' ' + user.lname);
    console.log(names);

  return (
    <div>Map</div>
  )
}
