import React from "react"
import "./Partners.css"

 

const Card = (props) => {
  return (
    <>
      <div className='main'>
        <img src={props.image} alt='' className="pattern-img" />
        </div>
    </>
  )
}

export default Card