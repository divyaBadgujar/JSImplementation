import React from 'react'

export const AsyncAwaitDemo = () => {
    let shop_is_open = true;

    function time(ms){
        return new Promise((resolve, reject) => {
            if(shop_is_open){
                setTimeout(resolve,ms);
            }
            else{
                reject("Shop is closed");
                }
        });
    }

    let stock ={
        fruits : ["Strawberry","Apple","Banana","Mango"],
        liquid : ["water", "ice"],
        holder : ["cone", "cup", "stick"],
        toppings : ["chocolate", "peanuts"],
    };
    async function kitchen(){
        try{
            await time(2000);
            console.log(`${stock.fruits[0]} was selected`);

            await time(0);
            console.log("Production is started");

            await time(2000);
            console.log("fruits has been chopped");

            await time(1000);
            console.log(`${stock.liquid[0]} and ${stock.liquid[1]} added`);

            await time(1000);
            console.log("Start the machine");

            await time(2000);
            console.log(`ice cream placed on ${stock.holder[1]}`);

            await time(3000);
            console.log(`${stock.toppings[0]} as toppings`);

            await time(2000);
            console.log("Serve Ice cream");

        }
        catch(err){
            console.log("Customer Left");
        }
    }
    kitchen();
  return (
    <div>AsyncAwaitDemo</div>
  )
}
