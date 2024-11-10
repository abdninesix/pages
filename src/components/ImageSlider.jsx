import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import slides from './Slides';

const Slides = ({src, alt, title, desc}) => {
  return (
    <div className="h-screen flex backdrop-blur-lg p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className='w-full h-[600px] flex flex-col lg:justify-between p-10 gap-8 rounded-2xl bg-gray-300 dark:bg-slate-900'>
        <div className='h-24 w-fit flex flex-col justify-center gap-4'>
          <h1 className="text-4xl lg:text-6xl">{title}</h1>
        </div>
        <div className='h-full relative lg:w-full flex flex-col lg:flex-row gap-8'>
          <img
            src={src}
            alt="img"
            height={256}
            width={256}
            className="block w-fit lg:w-2/3 h-fit object-cover rounded-2xl shadow-xl"
          />
          <p className="w-fit lg:w-1/3 lg:text-xl">{desc}</p>
        </div>    
      </div>
    </div>
  );
}

const ImageSlider = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="h-full w-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slides src={slide.src} alt={slide.alt} title={slide.title} desc={slide.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
