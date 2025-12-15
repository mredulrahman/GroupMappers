import React from 'react'
import Header from './../../Header';
import Footer from './../../Footer';


export default function Volunteering() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Volunteering</h3>
      </div>
      <div className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <p className='md:mx-[90px] p-2 text-lg'>
          GroupMappers values volunteers for their expertise, unique perspectives, and contributions to its success. Volunteering benefits include learning, networking, and career advancement. Fresh perspectives and abilities can aid in improving workflows and project turnaround times.
        </p>
        <div className='flex justify-center'>
          <img src="/src/assets/images/image_2023_02_23T09_39_11_601Z.png" alt="" />
        </div>
        <div className='grid md:grid-cols-2 p-6 gap-4'>
          <img src="/src/assets/images/86295115_2568873256717511_1866947121643520000_n-1536x1152.jpg" alt="" />
          <img src="/src/assets/images/IMG_20180705_182847-1536x1152.jpg" alt="" />
          <img src="/src/assets/images/gandr-collage-1536x864.jpg" alt="" />
          <img src="/src/assets/images/volunteer-1536x679.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}