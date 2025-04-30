import React from 'react'

export const NamedFunction = () => {

    function findSecondLargest(arr){
        let largest = -1, secondLargest=-1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            }
            else if (arr[i] > secondLargest && arr[i] != largest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest;   
    }
    

  return (
    <div>
        <h1>Named Function</h1>
        <p>Second largest number in the array is: {findSecondLargest([1,5,7,3,10])}</p>
    </div>
  )
}
