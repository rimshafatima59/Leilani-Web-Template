import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'
import Hero from './hero/Hero'
import Features from '../Features/Features'
import Partners from '../Partners/Partners'
import CourseHome from '../allcourses/CourseHome'


const Home = () => {
  return (
    <>
        <Hero />
        <AboutCard />
        {/* <HAbout /> */}
        <CourseHome/>
        <Features />
        <Partners />
        {/* <Footer /> */}
    </>
  )
}

export default Home