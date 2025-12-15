import React from 'react'
import Header from './../../Header';
import Footer from './../../Footer';


export default function Gisrsclubcafe() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>GIS/RS Club</h3>
      </div>
      <div className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <p className='md:mx-[90px] text-lg py-1 px-1'>
          GIS/RS club cafe is a forum that facilitates discussion on spatial techniques and research trends among professionals, volunteers, and groupmappers. The platform aims to connect young and enthusiastic minds with professional experts in the field.
        </p>
        <div className='flex justify-center py-5'>
          <img src="/src/assets/images/gis-and-rs-club-cafe.jpgtrtj-scaled.jpg" alt="" className='w-[800px] p-3' />
        </div>
      </div>
      <Footer />
    </>
  )
}