import React from 'react'
import Header from './../../../../Header';
import Footer from './../../../../Footer';

export default function Project_04() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Malaria API Tracker</h3>
      </div>
      <section>
        <div>
          <strong>An application programming interface (API) for tracking malaria cases of Bangladesh</strong><br/>
          <p className='py-2'>Malaria API Tracker Offers a complete solution for tracking and analyzing various aspects of malaria through a single platform. The dashboard system is designed by the GroupMappers team, where village maps can be continuously updated and the inputs come from the community within. The dashboard system shows maps, and map associated information and API data targeted for NMEADTP. The goal is to Develop existing malaria data visualization (geospatial and non-geospatial) platforms at the upazila level.  The interactive dashboard with updated village mapping can ensure a better monitoring system for the central governing body and it can strengthen local government. The system will facilitate better planning and policy-making at the national and local levels in disease surveillance and in other sectors. </p>
        </div>
        <div className='text-center py-5'>
          <p className='font-semibold'>Malaria API Tracker link: 
            <a href="https://malariaapitracker.com/" className='text-green-600 underline'>https://malariaapitracker.com/</a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
