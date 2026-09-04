import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const [text,setText]=useState("")

  const handleUpperCase = ()=>{
    setText(text.toUpperCase())
  }

  return (
    <>
      <div className='count'>
        <textarea value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
        <div>

        <button onClick={handleUpperCase}>Upper Case</button>
        {/* <h1>{count}</h1> */}
        <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
      </div>
    </>
  )
}

export default App
