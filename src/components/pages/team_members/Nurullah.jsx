import React from 'react'
import Header from './../../Header';
import Footer from './../../Footer';

export default function Nurullah() {
  return (
    <>
     <Header/>
     <div className='mt-8 ml-20'>
      <div>
          <h1 className='text-5xl font-bold text-blue-950'>Md Nurullah</h1>
          <h1 className='text-lg font-bold text-gray-500'>GIS Data manager</h1>
          <hr className='w-12 border-t-4 border-gray-400 my-8'/>
      </div>
      <div className='grid md:grid-cols-2 md:p-16'>
        <img src="/src/assets/images/PXL_20230422_0302hh04833-removebg-preview.png" alt="" className='md:ml-30 h-72'/>
        <p>A geographer with data management and GIS analytical capability. His main skill sets are in archiving data, documentation, creating metadata, organizing and storing databases, ensuring data security, privacy, and overall management for projects. He has supported different disease programmes in Bangladesh including rabies, malaria, dengue, and helminthiasis since 2017. He has recently been involved with the Geolocated Health Facility Database (GHFD) Initiative, rabies Mass Dog Vaccination (MDV) Program, Dengue and Chikungunyia Vector Surveys, COVID-19 Risk Zoning and Mobility Data Analysis for Bangladesh. He has expertise in mobile based data collection using KoBoCollect, ODK, Survey123, WVS and geospatial tools such as QGIS and ArcGIS (desktop and online) for data collection, management and analysis.</p>
      </div>
      <div>
        <p>contact details</p>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <a href="mailto:opunurullah@gmail.com" className='hover:underline text-green-700 font-bold'>opunurullah@gmail.com</a>
      </div>
     </div>
     <Footer/>
    </>
  )
}
