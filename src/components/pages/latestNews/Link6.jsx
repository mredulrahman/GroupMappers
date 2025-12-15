import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

export default function Link6() {
  return (
    <>
        <Header/>
        <div className='flex flex-col gap-9 p-[40px] bg-gradient-to-r from-cyan-200 via-sky-100 to-blue-100'>
          <div className='text-lg'>
            <p>Our five-day training session in Lama, Bandarban, has completed successfully on “Technical assistance in implementing village level data collection and surveillance towards malaria elimination in Lama upazila, Bandarban”. </p>
            <p>In Bandarban’s Lama Upazila, we taught healthcare workers from these unions- Fasiyakhali, Faitang, Gajalia, Serai, Ruposhipara, and Lama upazila.</p>
            <p>Health workers learned to send malaria data using the USSD system and kobo toolbox. To make it possible, a lot of support was provided by our field crew. </p>
            <p>The Lama local authority also helped us out with the events.</p>
            <p>We appreciate MORU and APMEN’s assistance and financial contribution to the training</p>
          </div>
          <div className='grid md:grid-cols-2 gap-5'>
            <img src="/src/assets/images/323640300_873953090592227_1708312130902432154_n.jpg" alt="pic-1" />
            <img src="/src/assets/images/324077315_720410186347008_8921419627736449713_n.jpg" alt="pic-2" />
            <img src="/src/assets/images/321748428_493428356251826_3099091657453625530_n.jpg" alt="pic-3" />
            <img src="/src/assets/images/324188414_627857699030322_6095590925278715175_n.jpg" alt="pic-4" />
          </div>
        </div>
        <Footer/>
    </>
  )
}
