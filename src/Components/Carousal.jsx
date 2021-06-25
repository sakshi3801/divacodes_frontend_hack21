import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carousal1 from '../images/home/carousal1.jpg'
import carousal2 from '../images/home/carousal2.jpg'
import carousal3 from '../images/home/carousal3.jpg'
import carousal4 from '../images/home/carousal4.jpg'
import './Carousal.css'
const Carousal = ()=>{

    return(
        <>
        <Carousel id='carousal'>

<Carousel.Item>
    <img
      className="d-block w-100" id='im'
      src={carousal1}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" id='im'
      src={carousal2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" id='im'
      src={carousal3}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" id='im'
      src={carousal4}
      alt="Third slide"
    />
  </Carousel.Item>

</Carousel>
        </>

    )
}

export default Carousal