import React, { useState } from 'react'

const Card = ({name,course,address,index}) => {
    

  return (
    <div className='card'>
        <h1>Std Id : {index}</h1>
      <h1>Name : {name}</h1>
    <h1>Course : {course}</h1>
      <h1>Address : {address}</h1>
    </div>
  )
}

export default Card
