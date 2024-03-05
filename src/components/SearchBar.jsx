import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`search/${search}`)
    setSearch('')
  }
  
  return (
    <form className='relative w-[70%] md:w-[400px]' onSubmit={handleSubmit}>
      <input type="text" className='w-full py-2 px-4 rounded-full h-[40px] md:h-[50px] focus:border-2 focus:border-red-600 focus:outline-none' placeholder='Search...' value={search} onChange={e => setSearch(e.target.value)} />
      <button className="absolute top-[7px] md:top-[12px] right-5 font-bold text-red-500">
        <i className="ri-search-line"></i>
      </button>
    </form>
  )
}

export default SearchBar