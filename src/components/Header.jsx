import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='kuk' >
    {/* <div className=' text-[#fff2f2] px-24 py-0.5 bg flex items-center justify-between pt-2'>
        <h5 className='font-bold  text-[#fff2f2]'>UIET KURUKSHETRA</h5>
        <div className='flex items-center  w-64 px-3 rounded-3xl border-[#fff2f2] border-2'>
            <input type="text" id='place' 
            className='w-[100%] text-[#fff2f2]'
            placeholder='Search this site' />
            <CiSearch className='text-4xl text-[#fff2f2] font-extrabold' id='search'/>

        </div>
    </div> */}
    <div className='flex flex-col gap-1 py-2'>
        <h1 className='text-[#fff2f2] font-extrabold text-4xl text-center'>University Institute of Engineering And Technology</h1>
        <p className='text-[#fff2f2] text-center font-semibold '>A Constituent Autonomous Institute and Recognized by UGC under Section 2(f) and 12(b) </p>
        <p className='text-[#fff2f2] text-center font-semibold '>Kurukshetra University , Kurukshetra </p>
        <p className='text-[#fff2f2] text-center font-semibold '>Established by the State Legislature Act XII of 1956</p>
        <p className='text-[#fff2f2] text-center font-semibold '>'A++' Grade, NAAC Accredited, Category-I University</p>
    </div>

    <div className=' flex items-center justify-between px-5  relative '>
    
    <div className='logo absolute top-2.5 left-5'></div>

    <nav className=' w-full flex justify-center items-center py-7'>
    <ul className='flex gap-17 font-bold text-[18px]   items-center'>
    <li>
        <NavLink id='btnn' className={({isActive})=>` btnn flex items-center ${isActive ? "text-white border-b-3" : "text-[#fff2f2]"}`} to="/">
             <a href="#uiet">   Home </a>
            </NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>`btnn flex items-center ${isActive ? "text-white border-b-3" : "text-[#fff2f2]"}`} to="/about">
                About 
            </NavLink>
        </li>        
        <li>
        <NavLink className={({isActive})=>`btnn flex items-center ${isActive ? "text-white border-b-3" : "text-[#fff2f2]"}`} to="/recruiters">
                    Recruiters
            </NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>`btnn flex items-center ${isActive ? "text-white border-b-3" : "text-[#fff2f2]"}`} to="/alumni"> 
                 Alumni 
            </NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=>`btnn flex items-center ${isActive ? "border-b-3 text-white" : "text-[#fff2f2]"}`} to="/placements" >
                Placements 
            </NavLink>
        </li>
        
    </ul>
    </nav>

  
        
        
    
    </div>
      
    </div>
    </>
  )
}

export default Header