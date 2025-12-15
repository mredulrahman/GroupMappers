import React from 'react'
import Header from './../../../../Header';
import Footer from './../../../../Footer';

export default function Dengue_2021() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-lg'>Dengue Risk Tracker: The Recent Seven Days Dengue Situation in Dhaka City Corporations – NME&ATDCP, DGHS</h3>
      </div>
      <div className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <div className='md:mx-[170px] p-3'>
          <p>
            The aim of this assignment is to develop a results-based monitoring and visualization platform for National Malaria Elimination and Aedes Transmitted Disease Control Program in Bangladesh. The Dengue Risk Tracker is a new collection of data visualization tools designed to aid in the control of dengue fever by reducing the time and distance between discovering new cases and treating them. Anyone with access to the tracker has the opportunity to give information. It was proposed to provide a system for visualizing and using dengue case data at the micro-level for better disease control. It will allow authorities at all levels of the healthcare system to combine data from various sources, evaluate it, and provide insights using user-friendly dashboards. A dashboard is developed showing the dengue situation (Dengue Patient Distribution Map) for seven days in Dhaka City Corporations. The dashboard is developed using ArcGIS. This dashboard is a data visualization and monitoring platform for better planning and resource allocation. The dashboard is designed using 3 key features in mind- creating an existing data visualization platform, creating a micro-planning and data collection platform, and a data monitoring platform.
          </p>
          <img src="/src/assets/images/Dashboard-Screenshot-4-Augutst.png" alt="" className='mx-[8px] py-2' />
          <img src="/src/assets/images/Dashboard-2-August.png" alt="" className='mx-[8px] py-2' />
          <img src="/src/assets/images/Capture.JPGjeofjo.jpg" alt="" className='mx-[150px] py-5'/>
        </div>
      </div>
      <Footer />
    </>
  )
}
