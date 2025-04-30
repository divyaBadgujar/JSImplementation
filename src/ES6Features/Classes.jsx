import React from 'react'

export const Classes = () => {
    class Animal{
        constructor(name){
            this.name = name;
            }
            speak(){
                console.log(`${this.name} makes a sound`);
            }
    }
    class Dog extends Animal{
            speak(){
                console.log(`${this.name} barks`);
            }
    }
    const myDog = new Dog('Buddy');
    myDog.speak();
  return (
    <div>Classes</div>
  )
}
