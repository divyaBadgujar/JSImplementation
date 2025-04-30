import React from 'react'

export const PalindromeString = () => {
    function checkPalindrome(str) {
        let left=0;
        let right=str.length-1;
        while(left<right){
            if(str[left]!=str[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    let str = "nayan";
    let result = checkPalindrome(str);
    console.log(result);
  return (
    <div>PalindromeString</div>
  )
}
