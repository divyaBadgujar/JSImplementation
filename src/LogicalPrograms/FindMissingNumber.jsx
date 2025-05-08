import React from 'react'

export const FindMissingNumber = () => {
    function FindMissingNum(arr){
        let missing = [];
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        for(let i=min;i<=max;i++){
            if(!arr.includes(i)){
                missing.push(i);
            }
        }
        return missing;
     }
     let arr = [1, 2, 4, 5, 6];
     let res = FindMissingNum(arr);
     console.log(res);

     //output - [3]
  return (
    <div>FindMissingNumber</div>
  )
}
