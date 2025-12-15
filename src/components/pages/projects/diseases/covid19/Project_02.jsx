import React from 'react'
import Header from './../../../../Header';
import Footer from './../../../../Footer';

export default function Proj_2021() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Mask Study</h3>
      </div>
      <section className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <div className='md:mx-[170px] p-3'>
          <p>A study focused on mapping mask usage during the Covid-19 pandemic. Volunteers used a counter application to collect data on the number of masks worn in different locations. They also identified differences in mask-wearing between indoor and outdoor locations and compared trends in mask-wearing behavior over time.</p>
        </div>
        <div className='flex flex-col gap-4 w-96 items-center'>
          <img src="/src/assets/images/3.-DISTRICTS-WITH-HIGHER-UPAZILA-COVERAGE-Mymensingh-and-Rajbari.jpg" alt="" className='w-full h-full' />
          <img src="/src/assets/images/mask-status-by-location.jpg" alt="" className='w-full h-full' />
        </div>
      </section>
      <Footer />
    </>
  )
}
