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
              src="/src/assets/images/E88DC258-35FA-4175-B8E2-42A08B82ABD0.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/1107267C-2E14-4632-B574-B9A6C127B330.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      );
  }

export default function Link4() {
  return (
    <>
      <Header/>
      <div className='flex flex-col gap-9 p-[50px] bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
        <div className='text-xl'>
          <p>GroupMappers had the privilege of attending the “Workshop on Development of Malaria funding request to Global Fund (GC-7)”, organized by the National Malaria Elimination and Aedes Transmission Control Program of the Directorate General of Health Services (DGHS), Ministry of Health and Family Welfare (MoH&FW), supported by the World Health Organization (WHO).</p>
          <p>Our team, along with BRAC Consortium and WHO, joined hands to discuss advancing malaria control efforts in Bangladesh with SMART Surveillance. At the workshop, we showcased how GroupMappers is assisting the NMEP (National Malaria Elimination Program) to collect micro stratified malaria data from villages. This data will help the program to make better interventions and have strong surveillance towards malaria elimination.</p>
          <p>We are proud to be a part of this initiative and working towards a malaria-free Bangladesh.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:w-[600px] md:h-[500px] p-4">
          <img src="/src/assets/images/E88DC258-35FA-4175-B8E2-42A08B82ABD0.jpg" alt="Slide 1" className="w-full h-full object-cover shadow-xl shadow-black"/>
          <img src="/src/assets/images/1107267C-2E14-4632-B574-B9A6C127B330.jpg" alt="Slide 2" className="w-full h-full object-cover shadow-xl shadow-black"/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
