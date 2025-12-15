import React from 'react'
import Header from './../../../../../Header';
import Footer from './../../../../../Footer';

export default function Acst() {
  return (
    <>
      <Header />
      <div className='bg-[#000B58] text-center py-1'>
        <h3 className='font-[600] text-white text-2xl'>Animal Control Staff Training</h3>
      </div>
      <section className='bg-gradient-to-r from-cyan-100 to-sky-50'>
        <div className='md:mx-[170px] p-3'>
          <p>
            A training program to assist with Rabies Elimination Program, Bangladesh. The purpose of this project was to offer practical instruction to the staff who are responsible for administering the vaccines and entering the dog vaccination data. It takes place upazila-wise once a year before MDV campaigns to train the staffs related to vaccine.
          </p>
        </div>
        <img src="" alt="" className='' />
      </section>
      <Footer />
    </>
  )
}