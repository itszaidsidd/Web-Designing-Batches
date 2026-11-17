import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [ayan, lubna] = useState(["Azil","Lubna"])

  return (
    <div className='body'>
     <div className="todo">
      <form action="">
        <input type="text" />
        <button >Add</button>
        <ul>
          {
            ayan.map((a)=>{
              return(
                <li>{a}</li>
              )
            })
          }
        </ul>
      </form>
     </div>
    </div>
  )
}

export default App
