import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SiBookstack } from "react-icons/si";
import { RiMagicFill } from "react-icons/ri"; 
import { FaMap } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { SlBadge } from "react-icons/sl";
import Marquee from 'react-fast-marquee';
import ReactLenis from 'lenis/react'
import SwiperOne from './SwiperOne';
import Dropdown from 'react-bootstrap/Dropdown';
import DropMenu from './DepartmentDD';
import DepartmentDropDown from './DepartmentDD';
import FacultyDropDown from './FacultyDropDown';

const Home = () => {
  let url = "https://careered.stanford.edu/sites/g/files/sbiybj22801/files/styles/breakpoint_2xl_1x/public/media/image/vpsa_020923_0202_0.jpg.webp?itok=uE9jp3nO"
  let secondUrl = "https://careered.stanford.edu/sites/g/files/sbiybj22801/files/styles/breakpoint_2xl_1x/public/media/image/careered-events_0.jpg.webp?itok=383uG5IZ"
  return (
    <>
    
    <div className='kuk'>
      
    <SwiperOne/>

      <div className='w-full  min-h-56 flex flex-col items-center pt-9'>
        <h2 className='text-5xl font-extrabold text-center text-[#fff2f2]'>Welcome to UIET!</h2>
        <p className='w-[60%]  mt-7 text-xl  even text-[#fff2f2]'>Welcome to the <span className='font-extrabold'>University Institute of Engineering & Technology (UIET),</span> a vibrant hub of learning,  innovation, and excellence at <span className='font-extrabold'>Kurukshetra University</span>. At UIET, we are dedicated to nurturing future  engineers, innovators, and leaders who are ready to meet global challenges with knowledge, creativity,  and integrity.
Join us on a journey of discovery, learning, and growth, where your aspirations meet endless opportunities.
</p>
        
      </div>
      <div className='w-full h-72 mt-9 flex justify-center gap-18 px-44 mb-10'>
        <div className='w-[30%] h-[100%] box  font-bold p-9 text-white glass rounded-xl' id='box'><p className='text-4xl'>Students</p> <br /> <p>UIET KURUKSHETRA draws on a reserve of extraordinary talent.</p>
        <br />
        <br />
        <br />
        
             {/* dropdown */}
        
        </div>
        <div className='w-[30%] h-[100%] bg-[#59B3A9] box  font-bold p-9 text-white glass rounded-xl'><p className='text-4xl'>Departments</p> <br /> UIET is home for various disciplines and 5+ different departments.
        <br />
        <br />
        <br />
        <br />

        <DepartmentDropDown/>
        </div>
        
        <div className='w-[30%] h-[100%] bg-[#59B3A9] box  font-bold p-9 text-white glass rounded-xl'> <p className='text-4xl'>Lorem</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, autem.</p>
        <br />
        <br />
        <br />
        <FacultyDropDown/>
         </div>
      </div>
      
      <SwiperOne />
      
      <div className='w-full min-h-screen kuk  p-2 py-8  text-[#fff2f2] flex flex-col items-center gap-5' id='uiet'>
          <div className='py-2 '>
            <h2 className='text-5xl font-bold text-center'>Why UIET Kurukshetra</h2>
          </div>
          <div className='w-[70%] text-[16px]  p-2 text-center '>
              <p className='even'>
              The University Institute of Engineering & Technology (UIET), Kurukshetra University is a premier institute known for its commitment to academic excellence, industry-oriented learning, and holistic student development. Established with a vision to provide world-class technical education, UIET KUK offers a dynamic environment that fosters innovation, research, and entrepreneurship.
              </p>
          </div>

          <div className='flex items-center justify-between px-40'>
            <div className='w-[30%] glass min-h-[50vh] flex flex-col items-center box gap-2 bg-amber-800 rounded p-4'>
            <FaRegStar className='text-4xl'/>
              <h2 className='text-2xl font-bold'>Rankings</h2>
              <p className='text-center'>Recognized as India’s No. 1 University, we strive for excellence. Our rankings are reflective of our steep progress. </p>
              <button className='bg-white text-black py-1 px-2 rounded'>Know More</button>
            </div>
            <div className='w-[30%] glass min-h-[50vh] flex flex-col items-center box gap-2 bg-amber-800 rounded p-4'>
            <SlBadge  className='text-4xl'/>
              <h2 className='text-2xl font-bold'>Admission Process</h2>
              <p className='text-center'>All the students enrolled at UIET Kurukshetra are selected after rigorous screening process. It ensures that we nurture India’s few most brilliant minds.  </p>
              <button className='bg-white text-black py-1 px-2 rounded'>
                <NavLink to='enquiry'>Know More</NavLink>
                </button>
            </div>
            <div className='w-[30%] glass min-h-[50vh] flex flex-col items-center box gap-2 bg-amber-800 rounded p-4'>
            <FaRegStar className='text-4xl'/>
              <h2 className='text-2xl text-center font-bold'>All Round Development</h2>
              <p className='text-center'>One’s skills, aptitude and perception reflect the personality of an individual. We offer numerous opportunities for multi dimensional growth of an individual. </p>
              <button className='bg-white text-black py-1 px-2 rounded'>Know More</button>
            </div>  
          </div>
      </div>

      <div className='w-full min-h-screen bg text-[#fff2f2] p-5 px-25'>
        <div>
          <h2 className='font-bold text-center text-5xl'>OUR PARTNERS</h2>
        </div>
        <div className='gri box flex items-center p-5 gap-15 flex-wrap rounded mt-7'>
          <div className=''> <img className='h-20' src="https://companieslogo.com/img/orig/JBMA.NS_BIG-0bb22e95.png?t=1720244492" alt="" /></div>
          <div> <img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png" alt="" /></div>
          <div> <img className='h-20' src="https://companieslogo.com/img/orig/BEL.NS_BIG-b2d0690e.png?t=1731133351" alt="" /></div>
          <div><img className='h-20' src="https://pnghunter.com/get-logo.php?id=31248" alt="" /></div>
          <div><img className='h-20' src="https://www.cdnlogo.com/logos/m/58/maruti-suzuki.svg" alt="" /></div>
          <div><img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg" alt="" /> </div>
          <div><img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png" alt="" /></div>
          <div> <img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/DAIKIN_logo.svg/1024px-DAIKIN_logo.svg.png" alt="" /> </div>
          <div><img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png" alt="" /></div>
          <div><img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png" alt="" /></div>
        </div>

        <div className='w-full box h-40 mt-7 flex items-center rounded'>

        <Marquee className='flex items-center gap-5'>
        <div className=''> <img className='h-20' src="https://companieslogo.com/img/orig/JBMA.NS_BIG-0bb22e95.png?t=1720244492" alt="" /></div>
          <div className='mx-4'> <img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png" alt="" /></div>
          <div> <img className='h-20' src="https://companieslogo.com/img/orig/BEL.NS_BIG-b2d0690e.png?t=1731133351" alt="" /></div>
          <div className='mx-4'><img className='h-20' src="https://pnghunter.com/get-logo.php?id=31248" alt="" /></div>
          <div className='mx-4'><img className='h-20' src="https://www.cdnlogo.com/logos/m/58/maruti-suzuki.svg" alt="" /></div>
          <div className='mx-4'><img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg" alt="" /> </div>
          <div className='mx-4'><img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png" alt="" /></div>
          <div className='mx-4'> <img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/DAIKIN_logo.svg/1024px-DAIKIN_logo.svg.png" alt="" /> </div>
          <div className='mx-4'><img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png" alt="" /></div>
          <div className='mx-4'><img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png" alt="" /></div>
        </Marquee>

        </div>

      </div>

      <div className='text-[#FEFAEC] p-7 px-25 glass' >
        <div className='box p-4 rounded-3xl '>
        <div className='flex items-center gap-2'>
        <SiBookstack  className='text-4xl text-[#FEFAEC]'/>
          <h2 className='text-2xl font-extrabold text-[#FEFAEC]'>Past Recruiters</h2>
        </div>
        <p className='text-xl mt-2'>Recruiters from some of the best companies in India have trusted the departments and students of UIET to bring them to great heights.</p>
        <div className='w-[100%] flex justify-end'>
        <button className='border-2 px-2 py-1 mt-4 rounded-2xl mr-6 font-bold'>
         <Link to='/recruiters'> Past Recruiters </Link></button>
        </div>
        </div>
      </div>

      <div className='text-[#FEFAEC] p-7 px-25 glass ' >
        <div className='box p-4 rounded-3xl'>
        <div className='flex items-center gap-2'>
        <RiMagicFill className='text-4xl text-[#FEFAEC]'/>
          <h2 className='text-2xl font-extrabold text-[#FEFAEC]'>Alumni</h2>
        </div>
        <p className='text-xl mt-2'>
        UIETians in general and alumni of UIET KUK in particular have excelled and acquired positions of eminence in every field imaginable—from Engineering to Finance to Management to even the Arts. Significantly, they have also acted as instruments of change wherever they have been. They have demonstrated social responsibility and now, increasingly, a responsibility towards their nation and their alma mater. 
        </p>
        <div className='w-[100%] flex justify-end'>
        <button className='border-2 px-4 py-1 mt-4 rounded-2xl mr-6 font-bold'>
         <NavLink to='/alumni'> Our Alumni </NavLink></button>
        </div>
        </div>
        
      </div>


      <div className='text-[#FEFAEC] p-7 px-25 glass' >
        <div className='box p-4 rounded-3xl '>
        <div className='flex items-center gap-2'>
        <SlGraph  className='text-4xl text-[#FEFAEC]'/>
          <h2 className='text-2xl font-extrabold text-[#FEFAEC]'>UIET Placement Reports</h2>
        </div>
        <p className='text-xl mt-2'>Placement program at UIET addresses the increasing need of corporates for engineering students. </p>
        <div className='w-[100%] flex justify-end'>
        <button className='border-2 px-7 py-1 mt-4 rounded-2xl mr-6 font-bold'>
         <NavLink to='/placements'> Reports </NavLink></button>
        </div>
        </div>
      </div>

      </div>
      
    </>
  )
}

export default Home