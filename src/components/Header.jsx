import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='bg-[#8C1515] text-white px-24 py-0.5'>
        <h5 className='font-bold'>UIET KURUKSHETRA</h5>
    </div>
    <div className='w-full flex justify-between items-center px-32 py-10' id='hello'>
        <div className=' w-[40%] flex items-center text-3xl '><span className='text-[#8C1515] text-4xl font-semibold  px-3 py-0' id='span'>UIET KUK</span> | Career Education</div>
        <div className='flex items-center border w-64 px-3 rounded-3xl'>
            <input type="text" id='place' 
            className='w-[100%] text-black'
            placeholder='Search this site'/>
            <CiSearch className='text-4xl text-[#8C1515] font-bold' />

        </div>
    </div>
    <nav className='w-full h-12  flex justify-center items-center'>
    <ul className='flex gap-8 font-semibold text-[18px]'>
        <li>
        <NavLink className={({isActive})=>` flex items-center ${isActive ? "text-black" : "text-[#8C1515]"}`} to="/about">
                About <MdOutlineKeyboardArrowDown className='text-[25px]'/>
            </NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=>` flex items-center ${isActive ? "text-black" : "text-[#8C1515]"}`} to="/coaching">
                Coaching <MdOutlineKeyboardArrowDown className='text-[25px]'/>
            </NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>` flex items-center ${isActive ? "text-black" : "text-[#8C1515]"}`} to="/events">
                Events <MdOutlineKeyboardArrowDown className='text-[25px]'/>
            </NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>` flex items-center ${isActive ? "text-black" : "text-[#8C1515]"}`} to="/resources">
                Resources <MdOutlineKeyboardArrowDown className='text-[25px]'/>
            </NavLink>
        </li>
        <li>
        <NavLink className='text-[#8C1515] flex items-center'>
                For Employers <MdOutlineKeyboardArrowDown className='text-[25px]'/>
            </NavLink>
        </li>
        <li>
        <NavLink className='text-[#8C1515] flex items-center'>
                For Alumni <MdOutlineKeyboardArrowDown className='text-[25px]'/>
            </NavLink>
        </li>
        <li>
        <NavLink className='text-[#8C1515] flex items-center'>
                For Families <MdOutlineKeyboardArrowDown className='text-[25px]'/>
            </NavLink>
        </li>
        
    </ul>
    </nav>
    </>
  )
}

export default Header