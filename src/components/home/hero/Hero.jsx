import React from 'react'
import Title from '../../common/title/Title'
import './hero.css'


const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle="WELCOME TO ACADEMIA" title="Best Online Education"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="button">
                        <button className= "primary-btn">
                            GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                         <button>
                            VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="marigin"> </div>
    </>
  )
}

export default Hero