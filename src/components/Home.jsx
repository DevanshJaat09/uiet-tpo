import React from 'react'

const Home = () => {
  let url = "https://careered.stanford.edu/sites/g/files/sbiybj22801/files/styles/breakpoint_2xl_1x/public/media/image/vpsa_020923_0202_0.jpg.webp?itok=uE9jp3nO"
  let secondUrl = "https://careered.stanford.edu/sites/g/files/sbiybj22801/files/styles/breakpoint_2xl_1x/public/media/image/careered-events_0.jpg.webp?itok=383uG5IZ"
  return (
    <>
      <div className='mt-5'>
        <img src={url} alt="" />
      </div>
      <div className='w-full  h-56 flex flex-col items-center mt-16'>
        <h2 className='text-3xl font-bold text-center '>Welcome to CareerEd!</h2>
        <p className='w-[100%] text-center mt-7 text-xl'>We are dedicated to helping you navigate your career journey. Whether you're just starting out, exploring <br /> options, or searching for jobs and internships, we offer the tools, resources, and guidance you need to thrive <br /> professionally at UIET and beyond.</p>
      </div>
      <div className='w-full h-72 flex justify-between px-44'>
        <div className='w-[40%] h-[100%] bg-[#8D1516] text-4xl font-bold p-9 text-white'>Making a Career <br /> Coaching <br /> Appointment</div>
        <div className='w-[40%] h-[100%] bg-[#59B3A9] text-4xl font-bold p-9'>Explore <br /> Oppurtunites on <br /> Handshake</div>
      </div>
      <div className='mt-40'>
        <img src={secondUrl} alt="" />
      </div>
    </>
  )
}

export default Home