import React from 'react'
import Header from '../../Header';
import Footer from '../../Footer';

export default function Link0() {
  return (
    <>
      <Header/>
        <div className='flex flex-col items-center p-7 bg-gradient-to-r from-cyan-200 to-sky-50'>
          <div>
            <p>Who doesn’t love being acknowledged on the global stage?</p>
            <p>🏆GroupMappers, MORU, is featured in celebration of World Malaria Day 2023 by WHO news. </p>
            <p>Check out the link below to read all about the malaria elimination efforts in Bangladesh!</p>
            👉�<a href="�https://www.who.int/bangladesh/news/detail/05-07-2023-celebration-of-world-malaria-day-202" target='_blank' class="hover:underline text-green-600">�https://www.who.int/bangladesh/news/detail/05-07-2023-celebration-of-world-malaria-day-202</a>3
            <p>Thanks to the National Malaria Elimination Programme of Bangladesh for arranging this valuable event.</p>
          </div>

          <div className='w-[80%] h-[60%] p-7'>
            <img src="/src/assets/images/363292119_622358269996766_5741166488675444152_n.webp" alt="" 
            className="w-full h-full"
            />
          </div>
        </div>

      <Footer/>
    </>
  )
}
