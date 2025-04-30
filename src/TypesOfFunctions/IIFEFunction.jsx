import React from 'react'

export const IIFEFunction = () => {
    (function () {
        console.log('IIFE function executed');
    })();
  return (
    <div>IIFEFunction</div>
  )
}
