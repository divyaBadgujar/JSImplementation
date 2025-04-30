import React from 'react'

export const ReverseInteger = () => {
    function ReverseInt(num){
        let rev=0;
        while(num>0){
            let lasDigit = num%10;
            rev = rev *10+lasDigit;
            num = Math.floor(num/10);
        }
        return rev;
    }
    const num = 1234;
    const reversedNum = ReverseInt(num);
    console.log(reversedNum);
  return (
    <div>ReverseInteger</div>
  )
}
