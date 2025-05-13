import React from 'react'

export const Call = () => {
    function getData(){
        console.log(this.fname + " " +this.lname);
    }
    const person = {
        fname: "John",
        lname: "Doe",
    }
    getData.call(person);
  return (
    <div>Call</div>
  )
}
