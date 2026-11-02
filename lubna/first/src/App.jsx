import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <div className="nav">
      <ul>
        <li>Home </li>
        <li>About </li>
        <li> help </li>
        <li>contact </li>
      </ul>
     </div>
   </div>
  )
}

export default App
