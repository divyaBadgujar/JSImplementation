import React from 'react'

export const FindFirstNonRepeatingCharacter = () => {
    function findfirstNonRepeatingChar(str){
        let charCount = {};
        for(let char of str){
            charCount[char] = (charCount[char] || 0 ) + 1;
        }
        for(let char of str){
            if(charCount[char] === 1){
                return char;
            }
        }
        return null;
    }
    let str = "javascriptlover";
    let res = findfirstNonRepeatingChar(str);
    console.log(res);
    //output - j

    //by using array
    // function FindEleOccuresOnlyOnce(arr){
    //     let elemCount = {};
    //     for(let elem of arr){
    //         elemCount[elem] = (elemCount[elem] || 0 ) + 1;
    //     }
    //     for(let elem of arr){
    //         if(elemCount[elem] === 1){
    //             return elem;
    //         }
    //     }
    //     return null;
    // }
    // let arr = [4, 3, 2, 4, 1, 3, 2];
    // let res = FindEleOccuresOnlyOnce(arr);
    // console.log(res);

    //output - 1

  return (
    <div>FindFirstNonRepeatingCharacter</div>
  )
}
