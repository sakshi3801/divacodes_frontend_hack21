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
import lamp2 from '../images/product/lamp5.jpg'
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
<<<<<<< HEAD
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
                                        <Card.Title className="title text-center  card-title">Brass Antique Finish Village Bullock Cart showpiece</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2000.00</span> <h5 id='price2'>Rs. 1850.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary">Visit website <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.jaypore.com/antique-copper-iron-lantern-with-handle-in-green-patina-finish-dia-8in-h-75in-p666594'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp2} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 3430.00</span> <h5 id='price2'>Rs. 2990.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl01-ecraftindia-black-wire-mesh-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp3} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl01-ecraftindia-black-wire-mesh-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp8} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://theindiacrafthouse.com/products/andhra-leather-craft-painted-standing-lamp-small-2?variant=9006527709228&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row id='cardRow' >
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp5} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Brass Antique Finish Village Bullock Cart showpiece</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2000.00</span> <h5 id='price2'>Rs. 1850.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary">Visit website <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://theindiacrafthouse.com/collections/wall-table-lamps/products/handcrafted-jaaliwork-wooden-lamp-medium-jml01b'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp6} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 3430.00</span> <h5 id='price2'>Rs. 2990.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.mirraw.com/designers/lal-haveli/designs/hnd00451-indian-ethnic-handicraft-home-decorative-hanging-lamps-other-home-accessory?country_code=IN'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp7} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://kraftinn.com/products/modern-floor-lamp?variant=39442665242812&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp4} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl03-ecraftindia-edison-filament-copper-finish-diamond-cage-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </CardDeck>
                </div>
                <Footer />
            </div>
        </>
=======
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
               <Card.Title className="title text-center  card-title">Brass Antique Finish Village Bullock Cart showpiece</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1850.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary">Visit website <LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/antique-copper-iron-lantern-with-handle-in-green-patina-finish-dia-8in-h-75in-p666594'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp2} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 3430.00</span> <h5 id = 'price2'>Rs. 2990.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl01-ecraftindia-black-wire-mesh-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp3} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl01-ecraftindia-black-wire-mesh-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>


       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp8} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://theindiacrafthouse.com/products/andhra-leather-craft-painted-standing-lamp-small-2?variant=9006527709228&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       </Row>

       <Row id='cardRow' >
       <Col md={3} className='cardCol'>
           <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp5} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Brass Antique Finish Village Bullock Cart showpiece</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1850.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary">Visit website <LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://theindiacrafthouse.com/collections/wall-table-lamps/products/handcrafted-jaaliwork-wooden-lamp-medium-jml01b'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp6} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 3430.00</span> <h5 id = 'price2'>Rs. 2990.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.mirraw.com/designers/lal-haveli/designs/hnd00451-indian-ethnic-handicraft-home-decorative-hanging-lamps-other-home-accessory?country_code=IN'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp7} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://kraftinn.com/products/modern-floor-lamp?variant=39442665242812&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={lamp4} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary">Visit Website  <LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl03-ecraftindia-edison-filament-copper-finish-diamond-cage-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       </Row>
       </CardDeck>
       </div>
       <Footer />
       </div>
       </>
>>>>>>> b23aaeed9dcfaf106d3fbbc96177cef7e9437b37
    )
}

export default Lamps