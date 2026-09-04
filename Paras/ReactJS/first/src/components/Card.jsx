import React from 'react'
import "./CardStyle.css"

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <p>Card Description</p>
    </div>
  )
}

export default Card
