import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-around items-center p-4 text-2xl font-bold'>
        <div className='flex gap-4 '>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/info">Info</Link>
        <Link href="/camp">Camp</Link>
        </div>
        <div className='flex gap-4 '>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </div>
      </nav>
      <hr className='mb-4'/>
    </div>
  )
}

export default Navbar
