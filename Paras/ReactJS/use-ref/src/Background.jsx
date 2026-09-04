import React, { useEffect, useRef, useState } from 'react'
import "./BackgroundColorStyle.css"

const Background = () => {
    const [color,setColor]=useState('white')
        const mainRef=useRef();
    
        useEffect(()=>{
            mainRef.current.style.backgroundColor=color
            if(color=='yellow' || color=='white'){
                mainRef.current.style.color='black'
            }else{

                mainRef.current.style.color='white'
            }
        },[color])
    
      return (
        <div>
          <nav>
            <ul>
                <li><button onClick={()=>{setColor('red')}}>Red</button></li>
                <li><button onClick={()=>{mainRef.current.style.backgroundColor='green'}}>Green</button></li>
                <li><button onClick={()=>{setColor('blue')}}>Blue</button></li>
                <li><button onClick={()=>{setColor('yellow')}}>Yellow</button></li>
                <li><button onClick={()=>{setColor('white')}}>White</button></li>
            </ul>
          </nav>
          <main ref={mainRef}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae exercitationem error doloribus nisi excepturi! Blanditiis deleniti alias ipsa, voluptate autem earum. Non odio odit nihil, distinctio dicta doloremque dolorem magni!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae exercitationem error doloribus nisi excepturi! Blanditiis deleniti alias ipsa, voluptate autem earum. Non odio odit nihil, distinctio dicta doloremque dolorem magni!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae exercitationem error doloribus nisi excepturi! Blanditiis deleniti alias ipsa, voluptate autem earum. Non odio odit nihil, distinctio dicta doloremque dolorem magni!</p>
          </main>
        </div>
    
  )
}

export default Background
