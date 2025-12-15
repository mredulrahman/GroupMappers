import React from 'react'
import Header from './../../../../Header';
import Footer from './../../../../Footer';

export default function Acitivity_2017() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Introduction to GIS for Communicable Disease Surveillance </h3>
      </div>
      <div className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <p className='mx-[80px] p-2'>An introductory meeting held between the GroupMappers and the authorities of Rabies Control Program. GroupMappers briefed the authorities about the applications of GIS for the mass dog vaccination program. The outcomes were ACS and MDV.</p>
        <div className='grid md:grid-cols-2 gap-6 px-15 py-8'>
          <img src="/src/assets/images/IMG_5609-scaled.jpg" alt="" />
          <img src="/src/assets/images/IMG_5647-scaled.jpg" alt="" />
          <img src="/src/assets/images/IMG_5581-scaled.jpg" alt="" />
          <img src="/src/assets/images/IMG_5673-scaled.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}