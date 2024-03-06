import React from 'react'
import { logo } from '../utils/constants'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 md:px-12 py-2 md:py-4 fixed w-full bg-[#333] z-50 shadow shadow-[rgba(0,0,0,.4)]'>
      <Link to={'/'} className='flex gap-3 items-center'>
        <img src={ logo } alt="" className="block w-[40px] md:w-[50px]" />
        <h1 className='hidden md:block text-4xl font-bold text-white'>Jeff<span className="text-red-600">Tube</span> </h1>
      </Link>
      <SearchBar />
    </div>
  )
}

export default Navbar