import React from 'react'

export const DeepCopy = () => {
    function makeDeepCopy(obj){
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        const copiedVal = Array.isArray(obj) ? [] : {};
        const key = Object.keys(obj);
        for (let i = 0; i<key.length;i++){
            copiedVal[key[i]] = makeDeepCopy(obj[key[i]]);
        }
        return copiedVal;
    }
    const original = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4
            }
        };
        const copied = makeDeepCopy(original);
        console.log(copied);
  return (
    <div>DeepCopy</div>
  )
}
