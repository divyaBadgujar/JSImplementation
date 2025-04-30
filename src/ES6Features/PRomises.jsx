import React from 'react'

export const PRomises = () => {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve('Data fetched!'), 1000);
        });
      };
      
      fetchData()
        .then(data => console.log(data))
        .catch(err => console.error(err));
  return (
    <div>PRomises</div>
  )
}
