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
            <NavbarComp />
            <div id='shop'>
                <h2 id='category'>Lamps-Light your Homes and Life</h2>
                <div id='card'>
                    <CardDeck id='cardDeck'>
                        <Row id='cardRow' >
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp1} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Antique Copper Iron Lantern With Handle In Green Patina Finish (Dia - 8in, H - 7.5in)</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2000.00</span> <h5 id='price2'>Rs. 1425.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary" href='https://www.jaypore.com/' target="_blank">Visit website <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.jaypore.com/antique-copper-iron-lantern-with-handle-in-green-patina-finish-dia-8in-h-75in-p666594' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp3} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 3430.00</span> <h5 id='price2'>Rs. 2990.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary" href='https://www.ecraftindia.com/' target="_blank">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl01-ecraftindia-black-wire-mesh-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxK64550E9l7QP3_bcD1dN30kmTClq33uLJcZR63JvI35lAyEEkp5ZV--JRAj3_J8ox70oP_8ufi3zY9ov84l8cqIjeOj4nljF3Q__LmEwUfnLFUI4JTc7DA&usqp=CAE" className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">14 Inch Pyramid Lamp In Sheesham Wood</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary" href='https://exclusivelane.com/' target="_blank">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://exclusivelane.com/products/14-inch-pyramid-lamp-in-sheesham-wood-el-003-061?variant=32589094813758&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp8} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Andhra Leather Craft - Painted Standing Lamp, Small</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary" href='https://theindiacrafthouse.com/' target="_blank">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://theindiacrafthouse.com/products/andhra-leather-craft-painted-standing-lamp-small-2?variant=9006527709228&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row id='cardRow' >
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp5} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Handcrafted Jaaliwork Wooden Lamp (Medium)</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2000.00</span> <h5 id='price2'>Rs. 1850.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"  href='https://theindiacrafthouse.com/' target="_blank">Visit website <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://theindiacrafthouse.com/collections/wall-table-lamps/products/handcrafted-jaaliwork-wooden-lamp-medium-jml01b' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGozauqH58smdSR6xEFQ9tkBYApHjL3H8fwFJj7ofZb712cPSxNnlwMl5dRG4WhsrZRTwXECRBBdUo0GvUqeG4TVMpoB1xdnjnw00orlQ&usqp=CAE" className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Decorative Hanging Lamp</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 3430.00</span> <h5 id='price2'>Rs. 2990.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary" href='https://www.igp.com/' target="_blank">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.igp.com/p-decorative-hanging-lamp-5568?currency=inr&utm_source=google&utm_medium=cpc&utm_campaign=1641245207&adgroupid=62181731425&device=c&keyword=&loc_interest_ms=&loc_physical_ms=9303169&feeditemid=&adposition=&gclid=CjwKCAjwoNuGBhA8EiwAFxomAwu0zU-1rQO7x0PM7VXUq2nYCMBk1s8QzlOADox5sqZie1uT9qz2tRoCLnwQAvD_BwE' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp7} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">MODERN FLOOR LAMP</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary" href='https://kraftinn.com/' target="_blank">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://kraftinn.com/products/modern-floor-lamp?variant=39442665242812&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={lamp4} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Edison Filament Copper Finish Diamond Cage Pendant Light, Ceiling Hanging Lamp</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary" href='https://www.ecraftindia.com/' target="_blank">Visit Website  <LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl03-ecraftindia-edison-filament-copper-finish-diamond-cage-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants' target="_blank">Buy Now</a></Button>
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