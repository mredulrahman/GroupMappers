import React from 'react'
import Header from './../../../../../Header';
import Footer from './../../../../../Footer';

export default function CdcTraining2018() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>CDC Atlanta Training</h3>
      </div>
      <section className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <div className='md:mx-[170px] p-3'>
        <p>This project assisted the Centers for Disease Control and Prevention (CDC) Atlanta, USA in a study based on oral bait preference for dog vaccination in Bangladesh.</p>
        </div>
      </section>  
      <Footer />
    </>
  )
}
