import React from 'react'
import Header from './../../../../Header';
import Footer from './../../../../Footer';

export default function FilariasisProj_2018() {
  return (
    <>
      <Header/>
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-xl'>Survey for assessing the prevalence of Soil-Transmitted Helminths (STH) among school-aged children of Bangladesh</h3>
      </div>
      <section className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <div className='md:mx-[170px] p-3'>
          <p>
            GroupMappers’ support to the<strong> National ELF and STH Control Program</strong>
          </p>
          <p>One of the initiatives we’re proud of is our support for the<strong> National ELF and STH Control Program among school-aged children as part of </strong> The Integrated Community-based Survey. With this project, our aim was to not only create a locational map for evaluation of the STH prevalence, but also to increase the capacity of the program.</p>
          <p>We used digital forms to survey over 5000 children from 84 schools in 51 districts to produce population-representative results and identify district-specific epidemiologic findings for program decisions.</p>
        </div>
      </section>
      <Footer/>
    </>
  )
}
