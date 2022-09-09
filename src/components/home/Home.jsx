import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'
import Hero from './hero/Hero'
import Features from '../Features/Features'
import Partners from '../Partners/Partners'


const Home = () => {
  return (
    <>
        <Hero />
        <AboutCard />
        <HAbout />
        <Features />
        <Partners />
        {/* <Footer /> */}
    </>
  )
}

export default Home