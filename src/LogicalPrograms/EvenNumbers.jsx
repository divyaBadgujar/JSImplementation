import React from 'react'

export const EvenNumbers = () => {
    function getEvenNumbers(arr) {
        let evenNumbers = [];
        for(let n of arr) {
            if(n % 2 === 0) {
                evenNumbers.push(n);
            }
        }
        return evenNumbers;
    }
    const numbers = [1, 2, 3, 4, 5,]
    const evenNumbers = getEvenNumbers(numbers);
    console.log(evenNumbers);

  return (
    <div>EvenNumbers</div>
  )
}
