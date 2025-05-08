import React from 'react'

export const ShiftZeroLast = () => {
    function ShiftZero(arr){
        let arr2 = [];
        for(let i=0;i<arr.length;i++){
            if(arr[i] !== 0){
                arr2.push(arr[i]);
            }
        }
        let zeroCount = arr.length - arr2.length;
        for(let i=0;i<zeroCount;i++){
            arr2.push(0);
        }
        return arr2;
    }
    let arr = [1, 0, 0, 2, 0,];
    let result = ShiftZero(arr);
    console.log(result);
  return (
    <div>ShiftZeroLast</div>
  )
}
