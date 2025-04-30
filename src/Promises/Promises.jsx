import React from 'react'

export const Promises = () => {
    function fetchData(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                const data = {message : "Data is fetched"};
                res(data);
            },2000)
        })
    }
    fetchData()
    .then((result)=>{
        console.log("Success",result.message);
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        console.log("Finally");
    })
  return (
    <div>Promises</div>
  )
}
