import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])


  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then(data => setVideoDetail(data?.items[0]))
    console.log(videoDetail);

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then(data => setVideos(data?.items))
  }, [id])

  return (
    <div className='md:h-[100vh] h-auto overflow-y-auto flex flex-col md:flex-row pt-16 md:pt-24 md:px-12 px-4 gap-10 no-scrollbar'>
      <div className='md:basis-2/3 w-full md:h-full h-[400px]'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width={'100%'} height={'80%'} controls  />
        <div className="py-4">
          <h3 className="text-white text-xl">{videoDetail?.snippet?.title}</h3>
          <div className="flex md:flex-row flex-col justify-between py-3">
            <Link to={`channel/${videoDetail?.snippet?.channelId}`}>
              <h3 className='text-slate-400 font-medium'>{videoDetail?.snippet?.channelTitle} <i className="ri-checkbox-circle-fill"></i></h3>
            </Link>
            <div className="flex gap-3 md:py-0 py-3">
              <p className="text-slate-400">{parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views</p>
              <p className="text-slate-400">{parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:basis-1/3 w-full h-auto md:h-[100vh] overflow-y-auto no-scrollbar'>
        <h1 className="text-white text-2xl">Related Videos</h1>
        <Videos videos={videos} col={'grid-cols-1'} />
      </div>
    </div>
  )
}

export default VideoDetail