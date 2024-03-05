import React from 'react'
import { Link } from "react-router-dom"
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoUrl, demoVideoTitle } from "../utils/constants";

const VideoCard = ({ video: {id:{videoId}, snippet} }) => {
  console.log(snippet);

  const truncateString = (str, num) => {
    if(str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }
  return (
    <div className='w-full h-auto bg-[#222] text-white'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img src={snippet?.thumbnails?.high?.url} alt="" className='w-full h-[200px] object-cover' />
      </Link>
      <div className="p-4">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <h4 className='font-bold'>{truncateString(snippet?.title, 50) || truncateString(demoVideoTitle, 50)}</h4>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <p className='text-slate-300 font-medium text-xs py-1'>{truncateString(snippet?.channelTitle, 50) || truncateString(demoChannelTitle, 50)} <i className="ri-checkbox-circle-fill"></i></p>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard