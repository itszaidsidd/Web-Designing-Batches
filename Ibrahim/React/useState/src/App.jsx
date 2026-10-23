import { useState } from "react"
import "./App.css"

function App() {
  const [count,setCount]=useState(0);

  function decrement(){
    if(count>0)
    setCount(count-1)
  }

  return (
    <>
      <div className="counter">
          {/* <button onClick={()=>{setCount(count-1)}}>Count {count}</button> */}
         
          <div className="btns">
            <button onClick={()=>{setCount(count+1)}}>Incremente</button>
            <div className="value">{count}</div>
            <button onClick={()=>decrement()}>{count<1?"Dont Click":"Decrement"}</button>
          </div>
      </div>
    </>
  )
}

export default App
