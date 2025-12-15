import React from 'react'
import Header from './../../../../Header';
import Footer from './../../../../Footer';

export default function Dengue_2019() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-lg'>Dengue Household Survey – NME&ATDCP, DGHS</h3>
      </div>
      <div className='bg-gradient-to-r from-cyan-100 to-sky-50 p-6 '>
        <p className="mx-[150px]">The aim of this project was household-level dengue data collection. Mobile-based data collection platform KoBoToolBox was used in this project. This data was used to tackle the dengue outbreak in Dhaka city. The surveyed site was selected based on the output of dengue drone survey. A total of 182 houses were surveyed, with 40 of them having dengue patients.</p>
        <img src="/src/assets/images/house-hold-servey.jpg" alt="" className='w-[900px] mx-[150px] py-5' />
      </div>
      <Footer />
    </>
  )
}
