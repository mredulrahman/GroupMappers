import React from 'react';
import Header from './../../../../../Header';
import Footer from './../../../../../Footer';

export default function DigitalMapMaking() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Digital map making and demarcation of union boundary</h3>
      </div>
      <section className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <div className='md:mx-[170px] p-3'>
          <p>A project to create digital maps for a mass dog vaccination program. </p>
        </div>
        <div>
          <img src="" alt=""  />
        </div>
      </section>
      <Footer />
    </>
  )
}
