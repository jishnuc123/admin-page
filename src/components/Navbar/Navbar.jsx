
import React from 'react'
import { assets } from '../../assets/assets'
function Navbar() {
  return (
   <>
   <div className='flex justify-between items-center p-[10px]'>
    <h2 className='text-3xl font-bold text-yellow-400'>Admin-Panel</h2>
    <img className='w-[40px]' src={assets.profile_image}/>
   </div>
   </>
  )
}

export default Navbar