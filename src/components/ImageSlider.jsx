import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const Slides = ({ src, alt, title, desc, link }) => {
  return (
    <div className="h-[800px] lg:h-[700px] flex backdrop-blur-md p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className='w-screen h-[700px] lg:h-[600px] flex flex-col lg:justify-between p-6 gap-8 rounded-2xl bg-gray-300 dark:bg-slate-900 duration-200'>

        <div className='h-20 w-fit flex flex-col justify-center gap-4'>
          <h1 className="text-3xl lg:text-4xl">{title}</h1>
        </div>

        <div className='h-full relative lg:w-full flex flex-col lg:flex-row gap-8'>
          <Image
            src={src}
            alt={alt}
            height={1024}
            width={1024}
            className="w-fit lg:w-2/3 h-fit object-cover rounded-2xl"
          />
          <div className="flex flex-col gap-5 w-fit lg:w-1/3 lg:text-xl">
            <h1 className='text-xl font-semibold'>Narrative:</h1>
            <p className="text-base">{desc}</p>
            <Link href={link} target='_blank' className="w-fit bg-mytheme hover:bg-black text-white rounded-md p-2">Demo</Link>
          </div>  
               
        </div> 

      </div>
    </div>
  );
}

const ImageSlider = ({ slides }) => {
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
        {slides.flat().map((slide, index) => (
          <SwiperSlide key={index}>
            <Slides src={slide.src} alt={slide.alt} title={slide.title} desc={slide.desc} link={slide.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
