import React from 'react'

export const OddEvenArrangement = () => {
    function oddeven(arr){
        let evenNum = [];
        let oddNum = [];
        for(let i=0;i<arr.length;i++){
            if(arr[i] % 2 === 0){
                evenNum.push(arr[i]);
            }
            else{
                oddNum.push(arr[i]);
            }
        }
        let result = [...evenNum,...oddNum];
        return result;
    }
    let arr = [3, 8, 5, 13, 6, 12, 7];
    let res = oddeven(arr);
    console.log(res);
  return (
    <div>OddEvenArrangement</div>
  )
}
