import React from 'react'
import { VideoCard, ChannelCard } from "./";

const Videos = ({videos, col}) => {
  return (
    <div className={`grid grid-cols-1 ${col ? col : 'md:grid-cols-4'} gap-4 py-4`}>
      {
        videos.map((item, idx) => (
          <div key={idx}>
            { item.id.videoId && <VideoCard video={item} /> }
            { item.id.channelId && <ChannelCard channelDetail={item} /> }
          </div>
        ))
      }
    </div>
  )
}

export default Videos