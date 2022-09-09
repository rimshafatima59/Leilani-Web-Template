import React from "react"

 

const Card = (props) => {
  return (
    <>
      <div className='main'>
        <img src={props.image} alt='' height={"140px"} width={"180px"} style={{flexDirection:"row"}} />
        </div>
    </>
  )
}

export default Card