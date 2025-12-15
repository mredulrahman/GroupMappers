import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

export default function Link9() {
  return (
    <div>
        <Header/>
        <div className='flex flex-col gap-9 p-[40px] bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
          <div className='text-md'>
            <p>Jagannath University celebrates GIS Day, 2022, with the theme “Share your passion and inspire the world!”</p>
            <p>Geography helps us understand our planet and interact with the world around us. It helps us figure out how things are, why they are where they are, and how cultural, economic, and political connections and movements affect us all.</p>
            <p>Therefore, GroupMappers’ principal objective is to maintain a geospatial perspective in order to see and work through problems.</p>
            <p>Shout out to Jagannath University’s Geography and Environment Department for celebrating GIS Day with such enthusiasm and for getting students and teachers involved in spreading the power of GIS. </p>
            <p>It gives us great pleasure to be able to sponsor the young team of JnU. </p>
            <p>To encourage the volunteers, Mr. Sazid Ibna Zaman, co-founder of GroupMappers, Mr. Mohammad Abdul Hadi, Country Manager at Esri Bangladesh/Esri South Asia, Vice-Chancellor of Jagannath University Professor Md. Imdadul Hoque, treasurer Professor Kamaluddin Ahmed and chairman Dr. Md Abdul Quader and other teachers from the department were present.</p>
          </div>
          <div className='grid md:grid-cols-2 gap-3 '>
            <img src="/src/assets/images/316113518_3357919677812861_7216339683318669044_n.webp" alt="pic-1" className='w-full h-full shadow-xl shadow-black' />
            <img src="/src/assets/images/316037169_3357919474479548_6259571720024836165_n.webp" alt="pic-2" className='w-full h-full shadow-xl shadow-black'/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
