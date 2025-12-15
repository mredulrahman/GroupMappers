import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
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
              src="/src/assets/images/363295717_621875540045039_953665437720276652_n.webp"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/363297922_621875673378359_8981438931493278956_n.webp"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/363292129_621875663378360_1155401361747734494_n.webp"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/361904854_619073853658541_5272702726254193233_n.webp"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/361923798_619073840325209_6338742848299233044_n.webp"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/359817205_619073836991876_4708544296222116099_n.webp"
              alt="Slide 6"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      );
    }


export default function Link1() {
  return (
    <div>
        <Header/>
        <div className='flex flex-col gap-9 p-[50px] bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
            <div className='text-lg'>
                <p>The two week long Diagnostic Network Optimization (DNO) training workshop, funded by FIND (Foundation for Innovative New Diagnostics) concluded on July 21st in Naivasha, Kenya.</p>
                <p>GroupMappers, MORU is immensely grateful to FIND for providing this valuable opportunity to gain hands on training on Optidx. It is web-based, open-access tool empowers us to conduct diagnostic network and route optimization analysis for any disease, aligning diagnostic networks with national health goals and supporting universal health coverage efforts.</p>
                <p>In low- and middle-income countries, basic diagnostic capacity is available in just 1% of primary care clinics and 14% of hospitals. Through Optidx, decision makers can now work towards expanding access, enhancing efficiency and managing costs effectively.</p>
                <p>Equipped with this knowledge, GroupMappers,MORU is ready to share the expertise and experience in improving diagnostic capacity of HIV, Malaria, TB and other diseases in Bangladesh, India, Pakistan, South Africa, Zambia, Kenya, USA, Vietnam.</p>
            </div>
            <div>
                <Slider/>
            </div>
        </div>

        <Footer/>
    </div>
  )
}
