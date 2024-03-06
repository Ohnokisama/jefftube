import React, { useState, useEffect } from 'react'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then(data => {
      setVideos(data.items)
    })
  }, [selectedCategory])

  return (
    <div className='flex flex-col md:flex-row pt-14 md:pt-0'>
      <div className='w-full md:w-[18%] h-[80px] md:h-[100vh] border-r-2 border-[#3d3d3d] relative'>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <p className='absolute p-3 bg-[#333] text-white text-center border-t-2 border-[#3d3d3d] bottom-0 center w-full hidden md:block'>Copyright &copy; {new Date().getFullYear()}. JeffTube</p>
      </div>
      <div className='w-full md:w-[82%] h-[100vh] overflow-y-auto no-scrollbar ml-0 px-4 md:px-8 pt-0 md:pt-28'>
        <h1 className="font-bold text-3xl md:text-4xl text-white mb-4">{selectedCategory} <span className='text-red-600'>Videos</span></h1>
        <Videos
          videos={videos}
        />
      </div>
    </div>
  )
}

export default Feed