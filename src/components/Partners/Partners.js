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
//             slidesToScroll: 1,
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
   
//   return (
//     <>

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

// export default Partners