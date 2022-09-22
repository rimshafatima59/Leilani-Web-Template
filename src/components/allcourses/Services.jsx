import React from 'react'
import { online } from '../../dummydata'
// import Title from '../common/title/Title'
import Heading from "../common/heading/Heading"
import "./Services.css"

const Services = () => {
  return (
    <>
        <section class = "online">
            
           

            <div className='services-container'>
              
          <div className='services-heading'>
            <h4 className="services-heading-h4">Features</h4>
            <h1 className="services-heading-h1">What I Do</h1>
          </div>
            

                <div className="grid3">
                    {online.map((val) => (
                        <div className="box">
                            <div className="img">
                                <img src = {val.cover} alt = "" />
                                <img src = {val.hoverCover} alt = "" className='show' />
                            </div>
                            <h1 className='service-h1'>{val.courseName}</h1>
                            <span >{val.course}</span>
                        </div>
                    ))}
                </div>
            </div>s
        </section>
    </>
  )
}

export default Services