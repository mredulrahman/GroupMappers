import React from 'react'
import Header from '../../Header';
import Footer from '../../Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

 function Slider() {
      return (
        <Swiper
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}      // You can turn off if not required
          autoplay={{
            delay: 3000,         // change slide every 3 seconds
            disableOnInteraction: false,
          }}
          speed={900}
          className="md:w-[600px] md:h-[500px]"
        >
          <SwiperSlide>
            <img
              src="/src/assets/images/355011755_603194128579847_6181054942140954672_n.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/355071675_603194161913177_2459536694508483564_n.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/355249308_603194215246505_8017127650234589952_n.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/354977875_603194105246516_657307999857633386_n.jpg"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/355026864_603194171913176_6330138378203206746_n.jpg"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      );
  }



export default function Link2() {
  return (
    <>
        <Header/>
        <div className='flex flex-col gap-9 p-[50px] bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
            <div className='text-lg'>
                <p>As part of year long activities the National Malaria Elimination and Aedes Transmitted Disease Control Program effectively carried out the Monsoon Aedes Survey.</p>
                <p>The goal of this study was to collect vector data for micro-level planning to deal with dengue outbreaks.</p>
                <p>GroupMappers is pleased to have contributed to this significant initiative. We are working together to provide the authorities with crucial information to tackle dengue during the monsoon season.</p>
                <p>As the alarming cases of dengue continue to rise, let’s prioritize the cleanliness of our neighborhoods and utilize mosquito repellents and bed nets to ensure the safety and well-being of everyone.</p>
            </div>

            <div>
                <Slider />
            </div>
        </div>
        <Footer/>
    </>
  )
}
