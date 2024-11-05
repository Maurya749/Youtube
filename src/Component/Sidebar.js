import React from 'react'
import { useSelector } from 'react-redux'
import store from './utils/store'

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null

  return (


    <div className='p-6 shadow-lg w-48'>
      <ul>

        <li> Home </li>

        <li>Sports </li>
        <li>  video</li>
        <li> Live</li>
      </ul>

      <h3 className='font-bold pt-5'> Subscribes</h3>
      <ul>

        <li> Home </li>

        <li>Sports </li>
        <li>  video</li>
        <li> Live</li>
      </ul>

      <h3 className='font-bold pt-5'> Watach Letter</h3>

      <ul>

        <li> Moves </li>

        <li>News </li>
        <li>  Cricket</li>
        <li> Music</li>
      </ul>


    </div>
  )
}

export default Sidebar