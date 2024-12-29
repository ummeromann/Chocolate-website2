import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-[rgb(65,17,17)] text-white p-5 flex justify-between items-center flex-wrap">
      <h1 className="text-2xl">Bean To Bliss</h1>
      <nav className="flex gap-10 items-center mt-2 sm:mt-0">
        <Link href="/" className="font-bold hover:underline">
          Home
        </Link>
        <Link href="about" className="font-bold hover:underline">
          About
        </Link>
        <Link href="chocolates" className="font-bold hover:underline">
          Chocolates
        </Link>
        <Link href="contact" className="font-bold hover:underline">
          Contact
        </Link>
        <FaShoppingCart className="text-white text-xl" />
      </nav>
    </header>
  )
}

export default Header
