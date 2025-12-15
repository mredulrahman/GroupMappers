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
              src="/src/assets/images/347430147_601424982090095_7684736885441774870_n.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/347551904_601425012090092_920833754943124441_n.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/A6BE6138-1DFD-44A8-85FF-1AA75BA353E0.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/BD1924AA-59D4-4593-B1D4-319E156B0E8B.jpg"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/347409515_601424575423469_7848089565814460537_n.jpg"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/9755D43A-5A33-4A73-915D-5EC5B00099F3.jpg"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/1686818772018-1.jpeg"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/347559626_601424728756787_8878677110318062212_n.jpg"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/F2FCE33F-A425-4E8A-BCF9-760008DE6326.jpg"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/4C3F4A74-C6BB-4FF1-BD22-31677F70FD6B.jpg"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/1686792682487.jpeg"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      );
  }


export default function Link3() {
  return (
    <>
        <Header/>
        <div className='flex flex-col gap-9 p-[50px] bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
          <div className='text-lg'>
            <p>NMEP, BRAC, and GroupMappers unite to celebrate The World Malaria Day, 2023. Honorable Health Minister Zahid Malek, alongside esteemed officials including CDC and DGHS Directors, grace the event.</p>
            <p>Together, we’re making significant strides in the fight against malaria.</p>
            <p>GroupMappers’ innovative surveillance dashboard enhances monitoring efforts, providing real-time insights for effective resource distribution and healthcare worker deployment.</p>
            <p>Let’s raise awareness, commemorate progress, and reaffirm our commitment to a malaria-free future.</p>
            <p>Join us as we work towards a world without malaria.</p>
          </div>
          <div>
            <Slider/>
          </div>
        </div>
        <Footer/>
    </>
  )
}
