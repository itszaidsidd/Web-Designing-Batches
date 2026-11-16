import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Container from './component/Container'

function App() {
  const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   alert("program render every time")
  // })
  // useEffect(()=>{
  //   alert("program has renderd")

    
  // },[])
  // useEffect(()=>{
  //  alert("subhan ka effect")
  // })

  return (
    <>
      <Navbar />
      <Container/>
    </>
  )
}

export default App
