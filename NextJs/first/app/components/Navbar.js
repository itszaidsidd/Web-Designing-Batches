import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-blue-950 text-white flex justify-around items-center py-2'>
      <h1 className="text-xl">Navbar</h1>
      <ul className='flex gap-15'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="contact"><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
