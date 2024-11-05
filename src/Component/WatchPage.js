import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Component/utils/appslice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v'); // Get the video ID from query params
  
    
    useEffect(() => {

        dispatch(closeMenu());

    }, [])
    return (
        <div>
            <iframe width="753"
             height="450"
             src={`https://www.youtube.com/embed/${videoId}`} 

              title="INDIA&#39;S GOT LATENT | EP 09 ft. @DeepakKalal @MananDesai @stanboss1" 
              frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen>
                    
                </iframe>

        </div>
    )
}

export default WatchPage