import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'
import { ShoppingCart } from '@material-ui/icons';
import metal1 from '../images/product/metal6.jpg'
import metal2 from '../images/product/metal7.jpg'
import clay3 from '../images/product/clay7.jpeg'
import metal4 from '../images/product/metal15.jpg'
import metal5 from '../images/product/metal4.jpg'
import metal6 from '../images/product/metal10.jpg'
import metal9 from '../images/product/metal9.jpg'
import metal12 from '../images/product/metal12.jpg'
import metal14 from '../images/product/metal14.jpg'
import LanguageIcon from '@material-ui/icons/Language';
import './product.css'

function Metal() {
    return (
        <>
            <NavbarComp />
            <div id='shop'>
                <h2 id='category'>Metal-Lustre and Strength together</h2>
                <div id='card'>
                    <CardDeck id='cardDeck'>
                        <Row id='cardRow' >
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={metal1} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Brass Antique Finish Village Bullock Cart showpiece</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2000.00</span> <h5 id='price2'>Rs. 1850.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.myntra.com/'>Visit Website </a><LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.myntra.com/showpieces/ecraftindia/ecraftindia-set-of-2-white-meenakari--metal-swans-showpieces/1611515/buy?utm_source=perf_google_PLA&utm_medium=perf_google_PLA&utm_campaign=PLA-SmartShopping-Top-Category&gclid=Cj0KCQjw_dWGBhDAARIsAMcYuJyWEWZiimDL-iQoXhzR1IXRPuavqDquNUsQPNU9m0srocSKvjI6v78aAv6oEALw_wcB'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={metal2} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 3430.00</span> <h5 id='price2'>Rs. 2990.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.myntra.com/'>Visit Website </a><LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.myntra.com/showpieces/ecraftindia/ecraftindia-gold-toned--red-stone-studded-brass-elephant-showpiece/11025470/buy'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={metal9} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://okhai.org/'>Visit Website </a><LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://okhai.org/products/dhokra-craft-stationery-holder-jaali?variant=34431258001574&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={metal4} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Brass Lord Ganesha Savari Antique Showpiece ccxc cxcsc cscs </Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.flipkart.com/'>Visit Website </a><LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.flipkart.com/flipkart-perfect-homes-brass-lord-ganesha-savari-antique-showpiece-decorative-11-cm/p/itm02fd277f866e7'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row id='cardRow' >
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={metal5} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Textured Tall Single Pc. Vase - Stoneware - Gold</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2000.00</span> <h5 id='price2'>Rs. 1850.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.homecentre.in/'>Visit Website </a><LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.homecentre.in/in/en/Decor/Home-Accessories/Vases/HOMECENTRE-Stellar-Fantasy-N-Celestial-Textured-Tall-Single-Pc-Vase--Stoneware--Gold/p/1000008417741'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={metal6} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Gold Brass Lord Krishna With Flute Idol
                                        </Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 3430.00</span> <h5 id='price2'>Rs. 2990.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.pepperfry.com/'>Visit Website </a><LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.pepperfry.com/gold-brass-lord-krishna-with-flute-idol-by-statue-studio-1755834.html'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={metal14} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Brass Urli (L- 8in, W- 9in, H- 9.5in)</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/'>Visit Website </a><LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.jaypore.com/brass-urli-l-8in-w-9in-h-95in-p585573'>Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={metal12} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">AUTHENTIC DOKRA ART FROM ODISHA - DANCING WOMEN PAIR
                                        </Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2300.00</span> <h5 id='price2'>Rs. 2000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.artisansoul.in/'>Visit Website </a><LanguageIcon /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.artisansoul.in/products/authentic-dokra-art-from-odisha-dancing-women'>Buy Now</a></Button>
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

export default Metal