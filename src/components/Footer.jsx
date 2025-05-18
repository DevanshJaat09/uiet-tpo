import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='w-full  pt-15 bg-[#FEFAEC] p-6'>
      <div className='flex flex-col items-center'>
        <p className='text-2xl font-bold'>Contact Us</p>
        <ul className='flex flex-col items-center'>
          <li className='flex items-center gap-2'>
          <FaLocationArrow />
          <p>University Institute of Engineering and Technology, Kurukshetra University</p> 
          </li>
          <li className='flex items-center gap-2'>
          <FaLocationDot />
          <p className='text-center'>Pehowa Road, University, Haryana 136119</p>
          </li>
          <li className='text-center flex items-center gap-2 '>
          <IoMdMail />
          director.uiet@kuk.ac.in</li>
          <li className='text-center flex items-center gap-2'>
          <FaPhoneAlt />
          01744-239155</li>
          <li className='text-center flex items-center gap-2'>
          <FaMapMarkedAlt />
            www.kuk.ac.in</li>
        </ul>
      </div>

      
    </div>
    </>
  )
}

export default Footer