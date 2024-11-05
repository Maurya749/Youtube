import React from 'react';
import { toggleMenu } from './utils/appslice';
import { useDispatch } from 'react-redux';

const Head = () => {
  const dispatch = useDispatch();
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col m-2 p-2 shadow-md'>
      <div className='flex gap-2'>
        <img 
          onClick={toggleMenuHandler} 
          className='h-8 cursor-pointer' 
          src="https://cdn-icons-png.flaticon.com/512/561/561184.png" 
          alt='Toggle menu' 
          aria-label='Toggle menu' 
        />
        <a href='https://www.youtube.com'>
          <img 
            className='h-8' 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" 
            alt="YouTube logo" 
          />
        </a>
      </div>

      <div className='col-span-10'>
        <input 
          type="text" 
          className="w-1/2 border-gray-200 p-2 rounded-l-full" 
          placeholder="Search..." 
        />
        <button className='border border-gray-400 px-4 py-2 rounded-r-full'>
          🔎︎
        </button>
      </div>

      <div>
        <img 
          className='h-7' 
          src='https://w7.pngwing.com/pngs/424/219/png-transparent-computer-icons-youtube-business-user-google-account-youtube-purple-angle-service-thumbnail.png' 
          alt='User avatar' 
          aria-label='User avatar' 
        />
      </div>
    </div>
  );
};

export default Head;
