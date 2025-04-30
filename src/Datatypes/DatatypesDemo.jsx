import React from 'react'

export const DatatypesDemo = () => {
    let name = "Divya";
    const age = 25;
    var occupation = "Software Developer";
    let hobbies = ["Reading", "Coding", "Traveling"];
    let address = {building :"7A", area:"viman nagar"}

    console.log(hobbies);
    console.log(address);

    let sym = Symbol('Hello');
    console.log(typeof(sym));

    console.log(name);
    console.log(age);
    console.log(occupation);
  return (
    <div>DatatypesDemo</div>
  )
}
