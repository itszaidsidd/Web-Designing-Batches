import React from 'react'
import "./CardStyle.css"

const Card2 = (props) => {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <p>{props.des}</p>
    </div>
  )
}

export default Card2
