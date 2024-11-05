import React from 'react';

const VideoCard = ({ info }) => {
    const snippet = info?.snippet; // Use optional chaining
    const statistics = info?.statistics; // Use optional chaining
    const { channelTitle, thumbnails, title } = snippet || {};

    return (
        <div className='max-w-xs p-4 m-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out'>
            {thumbnails ? (
                <img className='rounded-lg w-full h-48 object-cover' alt='thumbnail' src={thumbnails.medium.url} />
            ) : (
                <div className='h-48 bg-gray-200 rounded-lg flex items-center justify-center'>
                    <p className='text-gray-600'>No thumbnail available</p>
                </div>
            )}
            <div className='mt-2'>
                <h3 className='text-lg font-semibold text-gray-800 line-clamp-2'>{title || 'No title available'}</h3>
                <p className='text-gray-600'>{channelTitle || 'No channel title available'}</p>
                <p className='text-gray-500 text-sm'>{statistics?.viewCount || 'No view count available'} views</p>
            </div>
        </div>
    );
};

export default VideoCard;
