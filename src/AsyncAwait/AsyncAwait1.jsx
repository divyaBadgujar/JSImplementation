import React from 'react'

export const AsyncAwait1 = () => {
    const pr = new Promise((res)=>{
        setTimeout(()=>{
            res('Done');
        },1000);
    });
    async function test(){
        const ab = await pr;
        console.log(ab);
    }
    test();
  return (
    <div>AsyncAwait1</div>
  )
}
