import React from 'react'
import Header from './../../../../../Header';
import Footer from './../../../../../Footer';

export default function Training2021() {
  return (
    <>
      <Header/>
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Four Day Introductory Training on Dog Catching & Vaccination for National Team</h3>
      </div>
      <section className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <div className='md:mx-[170px] p-3'>
          <p>A training program for dog catching and vaccination with FAO.</p>
        </div>
      </section>
      <Footer/>
    </>
  )
}
