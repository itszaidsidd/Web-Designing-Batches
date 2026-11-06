
import './App.css'
import Navbar from './Navbar'
import Practice from './practice'
import Crystal from './crystal'
import { useEffect, useState } from 'react'


function App() {
const [count, setCount]= useState(0)
useEffect(()=>{
  alert("progran render every time")
})
useEffect(()=>{ 
   alert("program has renderd")
},[])
useEffect(()=>{
  alert("")
})

  return (
    <div className='main'>
    
    </div>
  )
}

export default App

