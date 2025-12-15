import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

export default function Link5() {
  return (
    <div>
        <Header/>
        <div className='flex flex-col gap-9 p-[30px] bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
          <div className='text-xl'>
            <p>Our CRP workshop has been successfully completed on the topic of “Use of Mobility Data for Guiding Public Health Responses”. </p>
            <p>The workshop took place in Thailand on February 9 and 10, 2023.</p>
            <p>The workshop’s main purpose was to use mobility data for public health purposes.</p>
          </div>
          <div className='grid md:grid-cols-2 gap-5'>
            <img src="/src/assets/images/329799865_446331290962677_9061255370092079196_n.jpg" alt="pic-1" className="shadow-xl shadow-black" />
            <img src="/src/assets/images/9D43283D-11A2-4796-8803-1EB9C7B12E83.jpg" alt="pic-2" className="shadow-xl shadow-black"/>
            <img src="/src/assets/images/329856116_2015029008690502_4708346483387385590_n-1.jpg" alt="pic-3" className="shadow-xl shadow-black"/>
            <img src="/src/assets/images/332125939_946766212981655_4392939912334334589_n.jpg" alt="pic-4" className="shadow-xl shadow-black"/>
            <img src="/src/assets/images/328691044_2123791297819819_3389678620706815151_n.jpg" alt="pic-5" className="shadow-xl shadow-black"/>
            <img src="/src/assets/images/331983336_1200178177277688_3773989570788146855_n.jpg" alt="pic-6" className="shadow-xl shadow-black"/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
