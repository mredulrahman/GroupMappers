import React from 'react'
import Header from './../../../../../Header';
import Footer from './../../../../../Footer';

export default function PreMonsoon() {
  return (
    <>
      <Header/>
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-lg'>Pre-monsoon Aedes Mosquito Survey – NME&ATDCP, DGHS
        </h3>
      </div>
      <div className='bg-gradient-to-r from-cyan-100 to-sky-50 '>
        <p className='mx-[90px] p-2 text-blue-950 text-lg'>Pre-monsoon Aedes Mosquito Survey – NME&ATDCP, DGHS</p><br/><br/>
        <p className='mx-[90px] text-blue-950 text-lg'>The goal of the project is vector data collection for micro-level planning. This survey will help the Government to tackle the future dengue situation. In order to conduct the survey, training was provided to the data collectors and CDC staff. The surveys are carried out by dividing the study areas into segments. The procedure is as follows: 98 wards were surveyed in 10 days by 21 teams. For this reason, 86 wards are divided into two sections and 10 wards are divided into 3 sections, with one team deployed in each section. Furthermore, each section is divided into four subsections, with three to four houses surveyed from each subsection, for a total of 15 households per section of a ward. Because the remaining two wards cover a bigger area, they were divided into four portions, each with one team. There are a total of 210 sections.</p>
        <div className='grid grid-cols-2 gap-4 px-20 py-10'>
          <div className='flex flex-col gap-4'>
            <img src="/src/assets/images/premonsoon.jpg" alt="" />
            <img src="/src/assets/images/pre-monsoon5-1536x1149.jpg" alt="" />
            <img src="/src/assets/images/WhatsApp-Image-2022-03-23-at-4.43.15-PM-1.jpeg" alt="" />
          </div>
          <div className='flex flex-col gap-4'>
            <img src="/src/assets/images/pre-monsoon3-1536x1152.jpg" alt="" />
            <img src="/src/assets/images/pre-1024x1024-1.jpg" alt="" />
            <img src="/src/assets/images/pre-monsoon4-1536x1149.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
