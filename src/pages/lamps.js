import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'
import { ShoppingCart } from '@material-ui/icons';
import lamp1 from '../images/product/shopping.webp'
import lamp2 from '../images/product/lamp11.jpg'
import lamp3 from '../images/product/lamp2.jpg'
import lamp4 from '../images/product/lamp6.jpg'
import lamp5 from '../images/product/lamp7.jpg'
import lamp6 from '../images/product/lamp8.jpg'
import lamp7 from '../images/product/lamp9.jpg'
import lamp8 from '../images/product/lamp10.jpg'
import LanguageIcon from '@material-ui/icons/Language';
import './product.css'

function Lamps() {
    return (
        <>
        <NavbarComp />
        <div id='shop'>
        <h2 id='category'>Lamps-Light your Homes and Life</h2>
<div id='card'>
       <CardDeck id='cardDeck'>
       <Row id='cardRow' >
       <Col md={3} className='cardCol'>
           <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp1} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Antique Copper Iron Lantern With Handle In Green Patina Finish</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1720.00</span> <h5 id = 'price2'>Rs. 1425.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic'/></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/antique-copper-iron-lantern-with-handle-in-green-patina-finish-dia-8in-h-75in-p666594' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp2} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Crystal Sliver Table Lamps for Living Room, Crystal Shade Metal Base</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2799.00</span> <h5 id = 'price2'>Rs. 1399.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.desertcart.in/' target='_blank'>Visit Website </a><LanguageIcon id='ic'/></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.desertcart.in/products/174390290-crystal-sliver-table-lamps-for-living-room-31-cm-modern-nightstand-lamp-with-crystal-shade-metal-base-beside-lamp-for-party-living-room-college-dorm-bulb-not-included' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp3} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2099.00</span> <h5 id = 'price2'>Rs. 1099.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic'/></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl01-ecraftindia-black-wire-mesh-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>


       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp8} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Andhra Leather Craft - Painted Standing Lamp, Small</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://theindiacrafthouse.com/' target='_blank'>Visit Website  </a><LanguageIcon id='ic'/></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://theindiacrafthouse.com/products/andhra-leather-craft-painted-standing-lamp-small-2?variant=9006527709228&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       </Row>

       <Row id='cardRow' >
       <Col md={3} className='cardCol'>
           <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp5} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Handcrafted Jaaliwork Wooden Lamp</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 4000.00</span> <h5 id = 'price2'>Rs. 3840.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://theindiacrafthouse.com/' target='_blank'>Visit Website  </a><LanguageIcon id='ic'/></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://theindiacrafthouse.com/collections/wall-table-lamps/products/handcrafted-jaaliwork-wooden-lamp-medium-jml01b' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp6} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Hand-Crafted Papier Mache Table Lamp</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1500.00</span> <h5 id = 'price2'>Rs. 1130.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://okhai.org/' target='_blank'>Visit Website </a>  <LanguageIcon id='ic'/></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://okhai.org/products/hand-painted-and-hand-crafted-papier-mache-table-lamp-2?variant=35852123013286&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=Cj0KCQjw2tCGBhCLARIsABJGmZ7y4SQh3-c7Mj2VuF0g9zg1hBs9P4wtwkAuNfev6GWJei-5aHNDSNMaAo7BEALw_wcB' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp7} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">MODERN FLOOR LAMP- Handmade
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://kraftinn.com/' target='_blank'>Visit Website  </a><LanguageIcon id='ic'/></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://kraftinn.com/products/modern-floor-lamp?variant=39442665242812&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp4} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Diamond Cage Pendant Light, Ceiling Lamp</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2399.00</span> <h5 id = 'price2'>Rs. 1199.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target='_blank'>Visit Website  </a><LanguageIcon id='ic'/></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl03-ecraftindia-edison-filament-copper-finish-diamond-cage-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       </Row>
       </CardDeck>
       </div>
       <Footer />
       </div>
       </>
    )
}

export default Lamps