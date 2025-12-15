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
              src="/src/assets/images/317859655_3366860196918809_9046594087199264735_n.webp"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/317833430_3366861036918725_3399902596752071204_n.webp"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/317559263_3366860170252145_7692020122015488025_n.webp"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/src/assets/images/317758415_3366861150252047_2790680141158065596_n.webp"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      );
    }


export default function Link8() {
  return (
    <>
      <Header/>
      <div className='flex flex-col gap-9 p-[40px] bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
        <div className='text-lg'>
          <p>“Mass Dog Vaccination Program (MDV)” from 30th November to 5th December, 2022</p>
          <p>The five-day-long “Mass Dog Vaccination (MDV)” under the National Rabies Control and Elimination Program, CDC, ZDCP and DGHS has begun yesterday, November 30th, in both Dhaka City Corporations, following the nationwide program. </p>
          <p>This is the third round of mass vaccination for all owned and stray dogs, with the goal of attaining herd immunity in the dog population. </p>
          <p>GroupMappers has been providing assistance to this program to support the field based data collection, training, monitoring, reporting and analysis to accelerate the elimination of rabies from Bangladesh since February of 2018.</p>
          <p>GroupMappers is strongly committed to reducing the risk of fatal diseases such as rabies, and we would like to offer our sincere appreciation to the DGHS for providing us with such a wonderful opportunity and our super energetic volunteer team to work for animal welfare.</p>
        </div>
        <div>
          <Slider/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
