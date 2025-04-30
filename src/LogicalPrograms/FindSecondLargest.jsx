import React from 'react'

export const FindSecondLargest = () => {
    const findSecondLargest = (arr) => {
        let largest = -1, secondLargest=-1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
                } 
                else if (arr[i] > secondLargest && arr[i] !== largest) {
                    secondLargest = arr[i];
                }
        }
        return secondLargest;
    }
    let arr=[12 ,34 ,56 ,34, 8 ,90];
    console.log(findSecondLargest(arr));
  return (
    <div>FindSecondLargest</div>
  )
}
