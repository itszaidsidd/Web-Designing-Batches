import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Login from './components/Login'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
