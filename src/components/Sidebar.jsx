import React from 'react'
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='flex flex-row overflow-x-auto h-auto absolute w-full md:bottom-10 py-2 md:py-5 md:h-[85%] md:flex-col md:overflow-y-scroll no-scrollbar'>
      {
        categories.map(category => (
          <button className={`md:py-3 md:px-5 px-4 py-2 w-auto whitespace-nowrap border md:border-none m-2 text-start rounded-full text-white ${category.name === selectedCategory && 'bg-red-600'} hover:bg-red-600 transition-all text-[14px] md:text-[16px]`} key={category.name} onClick={() => setSelectedCategory(category.name)}>
            <span className='mr-1 md:mr-3'>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))
      }
    </div>
  )
}

export default Sidebar