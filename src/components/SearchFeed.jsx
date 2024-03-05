import React, { useState, useEffect } from 'react'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then(data => {
      setVideos(data.items)
    })
  }, [searchTerm])

  return (
    <div className='pt-20 md:pt-10'>
      <div className='w-full h-[100vh] overflow-y-auto no-scrollbar ml-0 px-4 md:px-8 pt-0 md:pt-20'>
        <h1 className="font-bold text-3xl md:text-4xl text-white mb-4">Search Results for <span className='text-red-600'>{searchTerm}</span> videos</h1>
        <Videos
          videos={videos}
        />
      </div>
    </div>
  )
}

export default SearchFeed