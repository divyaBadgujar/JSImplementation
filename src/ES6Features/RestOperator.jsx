import React from 'react'

export const RestOperator = () => {
    function sum(...numbers){
        return numbers.reduce((acc,num)=>acc+num,0);
    }
    console.log(sum(1,2,3,4,5,6,7,8));
  return (
    <div>RestOperator</div>
  )
}
