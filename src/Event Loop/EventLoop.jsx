import React from "react";

export const EventLoop = () => {
//synchronous
//   setTimeout(() => console.log(1), 0);
//   console.log(2);
//   new Promise((res) => {
//     console.log(3);
//     res();
//   }).then(() => console.log(4));
//   console.log(5);


//asynchronous
    (async function(){
        console.log(1);
        await new Promise((res,rej) => {
            setTimeout(()=>{
                console.log(2);
                res()
            },1000)
            })

            await new Promise((res,rej) => {
                setTimeout(()=>{
                    console.log(3);
                    res()
                },0)
                console.log(4);
            });
    })();
  return <div>EventLoop</div>;
};
