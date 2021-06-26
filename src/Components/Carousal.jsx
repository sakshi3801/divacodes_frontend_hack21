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
            
            
            <div>
              <img className="d-block w-100" id='im' src={carousal1} alt="First slide"/>
              <div style={{ color: "#ffffff" }} class="text-block">
                  <h1>Welcome to Craft Moon</h1>
                  <p>A selected collection of hancrafted home/office decor</p>
                  
                </div>
             </div>
              
     
  </Carousel.Item>
  <Carousel.Item>
   
            <div >
              <img
                className="d-block w-100" id='im'
                src={carousal2}
                alt="Third slide"
              />
              <div style={{ color: "#000000" }} class="text-block color: rgb(26, 25, 25);">
                <h1>Welcome to Craft Moon</h1>
                <p>A selected collection of hancrafted home/office decor</p>
              </div>
            </div>
    
  </Carousel.Item>
  <Carousel.Item>
    
            <div >
              <img
                className="d-block w-100" id='im'
                src={carousal3}
                alt="Second slide"
              />
              <div style={{ color: "#ffff00" }} class="text-block color: rgb(26, 25, 25);">
                <h1>Welcome to Craft Moon</h1>
                <p>A selected collection of hancrafted home/office decor</p>
              </div>
            </div>
  </Carousel.Item>
  <Carousel.Item>
   
            <div >
              <img
                className="d-block w-100" id='im'
                src={carousal4}
                alt="Third slide"
              />
              <div style={{color:"#ffffff"}}class="text-block ">
                <h1>Welcome to Craft Moon</h1>
                <p>A selected collection of hancrafted home/office decor</p>
              </div>
            </div>
  </Carousel.Item>

</Carousel>
        </>

    )
}

export default Carousal