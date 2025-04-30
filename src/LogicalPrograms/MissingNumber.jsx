import React from 'react'

export const MissingNumber = () => {
    function findMissingNumber(arr) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        let missing = [];
        for(let i=min;i<max;i++)
        {
            if(!arr.includes(i)){
                missing.push(i);
            }
        }
        return missing;
    }
    let arr = [1, 2, 4, 6, 3,10];
    let result = findMissingNumber(arr);
    console.log(result);
  return (
    <div>MissingNumber</div>
  )
}
