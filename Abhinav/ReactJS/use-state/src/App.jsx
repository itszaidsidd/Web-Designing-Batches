import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(5)

  return (
    <div className='box'>
      <div>{count}</div>
      <button onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default App
