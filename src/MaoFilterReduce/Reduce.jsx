import React from 'react'

export const Reduce = () => {
    //output - [26-2,30-1,35-1]
    const users = [
        { id: 1, fname: 'John',lname:'Doe', age: 26 },
        { id: 2, fname: 'Jane',lname:'dark', age: 30 },
        { id: 3, fname: 'Bob',lname:'thomson', age: 35 },
        { id: 4, fname: 'Priyanka',lname:'Jonas', age: 26 },
    ];

    let output = users.reduce((acc,curr)=>{
        if(acc[curr.age]){
            acc[curr.age] = ++acc[curr.age];
        }
        else{
            acc[curr.age] = 1;
        }
        return acc;
    },{})
    console.log(output);
  return (
    <div>Reduce</div>
  )
}
