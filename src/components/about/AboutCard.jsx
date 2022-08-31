import React from 'react'
import Title from '../common/title/Title'

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src={require("../../../src/assets/images/about.webp")} alt = ""/>
          </div>

          <div className="right row">
            <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
            <div className="homeAbout">

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default AboutCard