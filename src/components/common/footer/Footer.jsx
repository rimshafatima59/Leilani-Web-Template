import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <section className="newletter">
            <div className="container flexSB">
                <div className="left row">
                    <h1>Newsletter - stay tune and get the latest update</h1>
                    <span>far far away, behing the word mountains</span>
                </div>
                <div className="right row">
                    <input type='text' placeholder='Enter email address' />
                    <i className="fa fa-paper-plane"></i>
                </div>
            </div>

        </section>

        <footer>
            <div className="container padding">
                <div className="box logo">
                    <h1>ACADEMIA</h1>
                    <span>online education & learning</span>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-youtube icon'></i>
                </div>
                <div className="box link">
                    <h3>Explore</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="box link">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="box">
                    <h3> Recent Post</h3>
                    {blog.slice(0,3).map((val) =>{
                        <div className="items flexSB">
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer