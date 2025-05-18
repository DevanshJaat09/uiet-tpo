import React from 'react'
import Marquee from 'react-fast-marquee'
import { useEffect } from 'react';

const Recruiters = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <div className='w-full min-h-screen kuk text-[#fff2f2] py-2 px-5 pt-10'>
      <div className='box p-5 text rounded-2xl'>
        <h2 className='text-4xl font-extrabold'>Why Recruit at UIET KURUKSHETRA?</h2>
        <p className='font-semibold mt-2'>One of the most prestigious institutions in the world for education and research in engineering and sciences, UIET Kuk offers the cream of the talent in the country. For five decades now, UIET has produced many illustrious people who have shone in their chosen fields. The following facts would give you an overview of why UIET kuk remains one of the most preferred destinations of recruitment for the leaders of industry.</p>
      </div>

      <div className='box p-5 text rounded-2xl mt-7'>
        <h2 className='text-4xl font-extrabold'>STUDENTS</h2>
        <p className='font-semibold mt-2'>The USP of the UIET is the fact that they take in the cream of the talented students every year. The selection processes for the various programs in UIET are very rigorous. JEE, GATE  are among the most competitive examinations. UIET Kuk is the destination of choice for many of the top position holders in these exams. Having cleared these tough exams, students go through even tougher academic curriculum. Apart from a strong emphasis on core technical knowledge, the life at UIET also includes character building, cultural activities, literary activities, sports and entrepreneurial activities.
      <br />
The reputed technical and cultural festivals of UIET, Shaastra, Saarang and Research scholars day are completely managed and coordinated by the students. This apart from the various departmental festivals, activities and competitions. These kinds of exposure imbibes both confidence and ability in the students to achieve what they want. No wonder then that the students of UIET have brought laurels to both the institute and the nation.</p>
      </div>

      <div className='box p-5 text rounded-2xl mt-7'>
        <h2 className='text-4xl font-extrabold'>FACULTY</h2>
        <p className='font-semibold mt-2'>UIET Kurukshetra has among the finest faculty members in any educational and research institution. World renowned for their prowess in teaching and research, the faculty of UIET Kuk have raised the name of the institution to what it is today. Many of the professors have rich experience in engineering and sciences. Having obtained their doctorates from prestigious institutes, prospective faculty undergo a rigorous selection process. There is an adage in UIET circles that it is more difficult to become a professor in UIET than a student. With many years of experience in research, the faculty are the leading light for the students who excel under their guidance. Every year many award-winning research publications occur in leading international and national journals.

Many professors are also distinguished members and fellows of various professional and research bodies like IEEE, ACM and INAE. The faculty of IITM also contribute to many governmental programs for development. Many faculty members also do industrial consultancy, working in collaborative projects with companies and organizations. The central and state governments as well as other bodies have conferred various titles and awards of honour on the faculty of IIT Madras.</p>
      </div>

      <Marquee className='flex items-center gap-5 mt-15 mb-15'>
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
    </>
  )
}

export default Recruiters