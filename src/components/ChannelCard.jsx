import React from 'react'
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail);
  return (
    <div className='w-full'>
      <Link to={channelDetail?.id?.channelId ? `/channel/${channelDetail?.id?.channelId}` : `/channel/${channelDetail?.id}`}>
        <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture || channelDetail?.thumbnails?.high?.url} alt={channelDetail?.snippet?.title} className='md:w-[200px] md:h-[200px] h-[120px] w-[120px] mx-auto object-cover rounded-full' />
      </Link>
      <h4 className='text-center my-3 text-white font-bold'>{channelDetail?.snippet?.title} <i className="ri-checkbox-circle-line"></i></h4>
      <p className='text-xs text-center text-white'>{channelDetail?.snippet?.description}</p>
      {channelDetail?.statistics?.subscriberCount && (
        <p className='text-xs text-center text-white'>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</p>
      )}
    </div>
  )
}

export default ChannelCard