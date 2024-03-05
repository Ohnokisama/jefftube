import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then(data => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then(data => setVideos(data?.items))
  }, [id])

  return (
    <div className='md:pt-20 pt-10 h-auto no-scrollbar'>
      <div className='w-full h-[150px] md:h-[300px] bg-gradient-to-r from-indigo-600 to-pink-600'></div>
      <div className='w-full md:w-[25%] mx-auto relative md:top-[-80px] top-[-50px]'>
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <div className='px-4 md:px-12 py-2'>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default ChannelDetail