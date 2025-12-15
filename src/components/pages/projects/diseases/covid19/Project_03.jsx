import React from 'react'
import Header from './../../../../Header';
import Footer from './../../../../Footer';

export default function Proj_2020() {
  return (
    <>
      <Header/>
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Covid-19 Risk Zoning</h3>
      </div>
      <section className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <div className='md:mx-[170px] p-3'>
          <strong>A collaborative effort between A2i and GroupMappers to develop a comprehensive geospatial dashboard for mapping Covid-19 cases and mobility patterns in Bangladesh, aimed at monitoring Covid-19 in Bangladesh.</strong><br/><br/>
          <p>The a2i initiative in Bangladesh, funded by UNDP, aimed to identify high-priority Covid-19 risk zones by analyzing data and mapping them. The project divided the process into four stages: patient address to coordinates, coordinates to map file, demarcating risk zones, and updating zoning-related maps and dashboards. The project utilized Excel and Google Earth Pro to geocode patient addresses, and ArcMap to plot the points and aggregate the data. A set of indicators were used to designate red, orange, and green zones based on laboratory-confirmed cases per 100,000 people.</p>
          <p>The project produced 64 district maps and 12 city corporation maps indicating risk zoning status and used two ArcGIS dashboards to present the information through intuitive and interactive data visualizations. The dashboards displayed information such as the population, area, case, case per lac, and risk zone status of a particular ward, city corporation, or zone.</p>
        </div>
        <div className='flex flex-col w-3xl gap-4 items-center'>
          <img src="/src/assets/images/risk-zone.png" alt="" className='size-full'/>
          <img src="/src/assets/images/wfdhg.png" alt="" className='size-full' />
        </div>
      </section>
      <Footer/>
    </>
  )
}