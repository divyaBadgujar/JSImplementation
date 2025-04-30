import React, { useState } from 'react'

export const TwoWatDataBinding = () => {
    const [subject,setSubject] = useState()

    const handleInputChange = (event) =>{
        setSubject(event.target.value)
    }
  return (
    <div className='container'>
        <h1>Two way data binding</h1>
        <div className='content'>
            <input
                type="text"
                placeholder='Enter the subject'
                value={subject}
                onChange={handleInputChange}
                className='input-field'
            />
            <p>Your selected subject is: <b>{subject || "___"}</b></p>
        </div>
    </div>
  )
}
