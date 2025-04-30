import React from 'react'

export const CallbackFunction = () => {

    // Simulate an asynchronous operation using setTimeout
function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 2000);
}

// Define a callback function
function processData() {
    console.log('Processing data...');
}

// Call fetchData and pass processData as a callback
fetchData(processData);


  return (
    <div>CallbackFunction</div>
  )
}
