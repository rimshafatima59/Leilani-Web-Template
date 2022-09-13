<<<<<<< HEAD
// import React from "react"
// import data from "../Partners/PartnersData"
// import Card from "./PartnersCard"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const Partners = () => {
//     const settings = {
//         className: "center",
//         infinite: true,
//         centerPadding: "60px",
//         slidesToShow: 5,
//         swipeToSlide: true,
//         autoplay:true,
//         slidesToShow: 6,
            slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 1500,
//             arrows: false,
//             dots: false,
//             pauseOnHover:false,
//             responsive: [{
//                 breakpoint: 768,
//                 setting: {
//                     slidesToShow:4
//                 }
//             }, {
//                 breakpoint: 520,
//                 setting: {
//                     slidesToShow: 3
//                 }
//             }],
//         afterChange: function(index) {
//           console.log(
//             `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//           );
//           }
//         }
=======
import React from "react"
import data from "../Partners/PartnersData"
import Card from "./PartnersCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Partners.css"

const Partners = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 5,
        swipeToSlide: true,
        autoplay:true,
        slidesToShow: 6, 
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover:false,
            responsive: [{
                breakpoint: 768,
                setting: {
                    slidesToShow:4
                }
            }, {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 940,
                setting: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 500,
                setting: {
                    slidesToShow: 4
                }
            }],
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
          }
        }
>>>>>>> 117936a95476f0cfcf40b5dec8936145acb26043
   
//   return (
//     <>

<<<<<<< HEAD
// <div>
// <div className='features-container'>
//           <div className='features-heading'>
//             <h4 className="features-heading-h4">Partners</h4>
//             <h1 className="features-heading-h1">What Partners Say</h1>
//           </div>
          
//         <Slider {...settings}>
//         {data.map((val, index) => {
//               return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
//             })}
//         </Slider>
//       </div>
//       </div>
//     </>
//   )
// }
=======
<div>
<div className='partners-container'>
          <div className='partnerss-heading'>
            <h4 className="partners-heading-h4">Partners</h4>
            <h1 className="partners-heading-h1">What Partners Say</h1>
          </div>
          <div className="slider partners-grid">
        <Slider {...settings}>
        {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
        </Slider>
        </div>
      </div>
      </div>
    </>
  )
}
>>>>>>> 117936a95476f0cfcf40b5dec8936145acb26043

// export default Partners