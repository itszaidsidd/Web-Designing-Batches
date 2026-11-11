import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [abc,xyz]=useState(0)

  return (
   <div>

    <div className="counter">
      <div className="value">{abc}</div>
      <button onClick={()=>xyz(abc+1)}>Click me</button>
    </div>
    <div className="timecounter">
      
    </div>
     {/* <div className="nav">
      <ul>
        <li>Home </li>
        <li>About </li>
        <li> help </li>
        <li>contact </li>
      </ul>
     </div> */}
   </div>
  )
}

export default App
