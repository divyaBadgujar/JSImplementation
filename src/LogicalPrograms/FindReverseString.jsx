import React from 'react'

export const FindReverseString = () => {
    function reverseString(str) {
        let reversed = "";
        for(let i=str.length - 1; i>=0; i--) {
            reversed += str[i];
        }
        return reversed;
    }
    const str = "Hello, World!";
    const reversed = reverseString(str);
    console.log(reversed);
  return (
    <div>FindReverseString</div>
  )
}
