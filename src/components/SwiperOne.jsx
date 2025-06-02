
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
            <img src="https://www.jagranimages.com/images/newimg/27072022/27_07_2022-kurukshetra_university_22928430.webp" alt="" /></div></SwiperSlide>
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