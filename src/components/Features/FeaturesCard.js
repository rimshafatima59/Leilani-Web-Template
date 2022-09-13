import React from "react"
import "./Features.css"

const Card = (props) => {
  return (
    <>
      <div className='features-box features-btn_shadow'>
        <img src={props.image} alt='' className="img2"  />
        <h3>{props.title}</h3>
        <hr className="hr"/>
        <p className="features-p">{props.desc}</p>
        <a href='/'>
          
        </a>
      </div>
    </>
  )
}

export default Card