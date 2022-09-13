import React from 'react'
import { homeAbout } from '../../dummydata'
import Title from '../common/title/Title'
import AWrapper from './AWrapper'
import './about.css'

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
      <div className='partners-container'>
          <div className='partnerss-heading'>
            <h4 className="partners-heading-h4">About us</h4>
            <h1 className="partners-heading-h1">What We Are</h1>
          </div>
          </div>
        <div className="container flexSB">
          <div className="left row">
            <img src={require("../../../src/assets/images/about.webp")} alt = ""/>
          </div>

          <div className="right row">
            <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
            <div className="items">{homeAbout.map((val) => (
              <div className="item flexSB">
                <div className="img">
                  <img src={val.cover} alt = ""/>
                </div>
                <div className="text">
                  <h2>{val.title}</h2>
                  <h2>{val.desc}</h2>
                </div>
              </div>
            ))}</div>
          </div>
        </div>

      </section>
      {/* <AWrapper /> */}
    </>
  )
}

export default AboutCard