import React from 'react'
import Header from './header'
import Socials from './socials'
import Footer from './footer'

const Sponsors = () => (
  <div className="">
    <Header />
    <div className="mx-10 my-24 lg:mx-60">
            <h1 className="text-4xl font-bold lg:text-5xl lg:mb-2 md:text-4xl">StudyTme</h1>
            <h2 className="font-serif text-2xl italic lg:text-3xl ">aka Giulia Mazza</h2>

            <Socials />
            
            <h3 className='text-2xl font-bold lg:'>About</h3>
            <p className="lg:text-2xl">
              {' '}
              Content creator and community manager addicted to productivity
            </p>
          </div>

          <div>
          <h3 className='text-2xl font-bold lg:'>Audience</h3>
            <p className="lg:text-2xl">
              {' '}
              Content creator and community manager addicted to productivity
            </p>
          </div>
          
    <Footer />
  </div>
)

export default Sponsors
