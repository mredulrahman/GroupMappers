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
              src="/src/assets/images/320811567_523192509756883_5078948741165636619_n.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/320692749_1154324201870460_2338870672562996617_n.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/320437920_3497013470528431_1698111513583127688_n.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/320775608_6152377968127989_838837177591976292_n.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      );
  }


export default function Link7() {
  return (
    <>
      <Header/>
      <div className='flex flex-col gap-9 p-[40px] bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
        <div className='text-lg'>
          <p>A two-day workshop with FiND , ICCDR, B and NMEP on “Applying Diagnostic Network Optimisation Analysis” to inform the introduction of G6PD testing into Bangladesh for improved malaria treatment was held on December 14th and 15th, 2022. </p>
          <p>The project’s aim was to support the National Malaria Elimination Program (NMEP) in Bangladesh by modeling an evidence-based strategy for introducing G6PD diagnosis that best uses available resources to ensure optimal access to testing by P. vivax patients and running the OptiDx baseline model to estimate the coverage and cost of potential scenarios for G6PD testing</p>
        </div>
        <div>
          <Slider />
        </div>
      </div>
      <Footer/>
    </>
  )
}
