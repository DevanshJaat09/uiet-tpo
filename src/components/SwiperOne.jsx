
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperOne = () => {
  return (
     <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'><div className='ht h-[100%] w-[80%] bg-amber-600' id='one'>
           </div></SwiperSlide>
        <SwiperSlide><div className='ht h-[100%] w-[80%] bg-amber-600'>
            <img src="https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='ht h-[100%] w-[80%] bg-amber-600'></div></SwiperSlide>
        <SwiperSlide><div className='ht h-[100%] w-[80%] bg-amber-600'></div></SwiperSlide>
        <SwiperSlide><div className='ht h-[100%] w-[80%] bg-amber-600'></div></SwiperSlide>
        <SwiperSlide><div className='ht h-[100%] w-[80%] bg-amber-600'></div></SwiperSlide>
        <SwiperSlide><div className='ht h-[100%] w-[80%] bg-amber-600'></div></SwiperSlide>
        <SwiperSlide><div className='ht h-[100%] w-[80%] bg-amber-600'></div></SwiperSlide>
        <SwiperSlide><div className='ht h-[100%] w-[80%] bg-amber-600'></div></SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperOne