import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const count=useSelector((state)=>state.counter.value)

  return (
    <div>
        <br/><br/><br/>
        I am navbar count {count}
    </div>
  )
}

export default Navbar
