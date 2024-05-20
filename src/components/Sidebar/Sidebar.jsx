
import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'


function Sidebar() {
  return (
   <>
   <div className='w-[18%] min-h-[100vh] border border-gray-500 border-t-0 text-[max(1vw,10px)]'>
    <div className='pt-[50px] ps-[20%] flex flex-col gap-[20px]'>
      
      <NavLink to='/add' className='flex items-center gap-[12px] border border-gray-400 border-r-0 ps-[8px] py-[10px] rounded-[3px 0px 0px 3px] cursor-pointer active:border-yellow-400'>
        <img src={assets.add_icon}/>
        <p>Add Items</p>
      </NavLink>
      
      <NavLink to='list' className='flex items-center gap-[12px] border border-gray-400 border-r-0 ps-[8px] py-[10px] rounded-[3px 0px 0px 3px] cursor-pointer active:border-yellow-400'>
        <img src={assets.order_icon}/>
        <p>List Items</p>
      </NavLink>
      
      <NavLink to='orders' className='flex items-center gap-[12px] border border-gray-400 border-r-0 ps-[8px] py-[10px] rounded-[3px 0px 0px 3px] cursor-pointer active:border-yellow-400'>
        <img src={assets.order_icon}/>
        <p>Orders</p>
      </NavLink>
    
    </div>
   </div>
   
   </>
  )
}

export default Sidebar