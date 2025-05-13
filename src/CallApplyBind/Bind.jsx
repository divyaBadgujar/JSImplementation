import React from 'react'

export const Bind = () => {
    function getData(city){
        console.log(this.fname + " " + this.lname + " is from " + city);
    }
    let person ={
        fname: "John",
        lname: "Doe",
    }
    const bindName = getData.bind(person);
    bindName("New York");
  return (
    <div>Bind</div>
  )
}
