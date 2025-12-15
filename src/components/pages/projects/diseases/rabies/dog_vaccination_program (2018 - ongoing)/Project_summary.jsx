import React from 'react'
import Header from './../../../../../Header';
import Footer from './../../../../../Footer';

export default function Proj_Summary() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Project Summary</h3>
      </div>
        <section className='bg-gradient-to-r from-cyan-100 to-sky-50'>
          <div className='md:mx-[170px] p-3'>
            <p>The National Rabies Elimination Program in Bangladesh, supported by GroupMappers, focuses on achieving herd immunity and controlling rabies through mass dog vaccination. GroupMappers plays a crucial role in ensuring the vaccination of at least 70% of dogs across the country.</p>
            <p>The program includes training for animal control staff, digital map making, evaluation programs, and training on dog catching and vaccination. It has significantly impacted people’s perception of animal welfare and increased awareness about anti-rabies vaccines and treatment. The program has made substantial progress in eliminating rabies and safeguarding public health in Bangladesh.</p>
            
            <p><strong>Client: </strong> National Rabies Elimination Program, CDC, DGHS</p>
          </div>
          <div className='flex flex-col gap-3 md:mx-[200px] p-3'>
            <img src="/src/assets/images/18.GroupMappers-Showcase.jpg" alt="" />
            <img src="/src/assets/images/rabies.jpg" alt="" />
          </div>
        </section>
      <Footer />
    </>
  )
}