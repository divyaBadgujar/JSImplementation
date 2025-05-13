import React from 'react'

export const Apply = () => {
    function getData(...cities){
        console.log(this.fname +" "+ this.lname+" has live in "+cities);
    }
    let person = {
        fname: "John",
        lname: "Doe",
    }

    let cities = ["pune","mumbai","banglore"];
    getData.apply(person,cities);

  return (
    <div>Apply</div>
  )
}
