import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../Component/utils/contains'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [video, setVedeos] = useState([]);
  useEffect (()=>{

    getVideos();

  }, []);

  const getVideos = async () =>{

    const data = await fetch (YOUTUBE_VIDEOS_API)
    const json = await data.json();
  //  console.log (json.items);
    setVedeos (json.items);
  }
  return (
    <div className='flex-wrap flex ' >
      
      {video.map((video)=> ( 
       
      <Link to={'/watch?v='+ video.id}> 
      
      <VideoCard key={video.id} info = {video}/>
      
      

      </Link>
       
  
    ))}
            </div>
  )
}

export default VideoContainer