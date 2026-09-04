import React from 'react'
import "./CardStyle.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIn_89eS9S7VW34fkJusLnpvqSGcEOi0efrFElmp68MA&s=10" alt="" />
        <h1>{props.title}</h1>
        <p>{props.desc} Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, maxime iste enim commodi assumenda voluptatem ipsam deleniti laudantium accusantium? Cum, earum non vitae laudantium eum rerum impedit nemo sint nihil.</p>
    </div>
  )
}

export default Card
