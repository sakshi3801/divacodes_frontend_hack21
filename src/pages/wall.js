import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'
import { ShoppingCart } from '@material-ui/icons';
import wall1 from '../images/product/wall9.jpeg'
import wall2 from '../images/product/wall2.jpg'
import wall3 from '../images/product/wall3.jpg'
import wall4 from '../images/product/wall4.jpg'
import wall5 from '../images/product/wall5.jpg'
import wall6 from '../images/product/wall6.jpg'
import wall7 from '../images/product/wall7.jpg'
import wall8 from '../images/product/wall8.jpg'
import metal14 from '../images/product/metal14.jpg'
import LanguageIcon from '@material-ui/icons/Language';
import './product.css'

function Wall() {
    return (
        <>
            <NavbarComp />
            <div id='shop'>
                <h2 id='category'>Wall- Give your walls an artistic touch</h2>
                <div id='card'>
                    <CardDeck id='cardDeck'>
                        <Row id='cardRow' >

                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={wall8} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Hippy Mandala Wall Hanging Decorative Handmade Tapestry
                                        </Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 375.00</span> <h5 id='price2'>Rs. 250.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.indiamart.com/' target="_blank">Visit Website </a><LanguageIcon id='ic' /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.indiamart.com/proddetail/hippy-mandala-wall-hanging-decorative-handmade-tapestry-17715880155.html' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={wall2} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Antique Malhar Wall Screen (L - 7.5in ,W - 3in ,H - 21.5in)
                                        </Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 1212.00</span> <h5 id='price2'>Rs. 1000.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/' target="_blank">Visit Website </a><LanguageIcon id='ic' /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.jaypore.com/antique-gold-malhar-wall-screen-l-75in-w-3in-h-215in-iron-p712280' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={wall3} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">GANESH DEEPAK WITH BELL BRASS WALL HANGING AND ARTIFACT
                                        </Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 1623.00</span> <h5 id='price2'>Rs. 1349.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.mirraw.com/' target="_blank">Visit Website </a><LanguageIcon id='ic' /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.mirraw.com/designers/ecraftindia/designs/ganesh-deepak-with-bell-brass-wall-hanging-and-artifact-other-home-accessory' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={wall4} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">LOVE BIRDS SATIN MATT TEXTURE UV ART PAINTING</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 899.00</span> <h5 id='price2'>Rs. 530.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.mirraw.com/' target="_blank">Visit Website </a><LanguageIcon id='ic' /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.mirraw.com/designers/ecraftindia/designs/love-birds-satin-matt-texture-uv-art-painting' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row id='cardRow' >
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={wall5} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Sunrise View Decorative Wooden Handcrafted Wall Clock
                                        </Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 1899.00</span> <h5 id='price2'>Rs. 1199.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target="_blank">Visit Website </a><LanguageIcon id='ic' /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ecraftindia-sunrise-view-decorative-wooden-handcrafted-wall-clock' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={wall6} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Set of 3 Floral and Botanical Satin Matt Textured UV Art Painting
                                        </Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 3430.00</span> <h5 id='price2'>Rs. 2990.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.ajio.com/' target="_blank">Visit Website </a><LanguageIcon id='ic' /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.ajio.com/ecraftindia-set-of-3-floral-and-botanical-satin-matt-textured-uv-art-painting/p/461804512_blue' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={wall7} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Colorful and Vibrant Feather Dream Catcher - Handmade
                                        </Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 655.00</span> <h5 id='price2'>Rs. 450.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://artbodymind.com/' target="_blank">Visit Website </a><LanguageIcon id='ic' /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://artbodymind.com/products/antique-handmade-dream-catcher-peacock-feather-wall-hanging-decoration-wind-chimes-ornament-25-long' target="_blank">Buy Now</a></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} xs={6} className='cardCol'>
                                <Card className="focus mt-2 mb-2" id='sec'>
                                    <Card.Img variant="top" src={wall1} className='cardImg' />
                                    <Card.Body className='cardBody'>
                                        <Card.Title className="title text-center  card-title">Pink Acacia Wood Net Floral Series Wall Plate - Handmade</Card.Title>
                                        <Card.Text id='cardText'>
                                            <span id='price1'>Rs 2000.00</span> <h5 id='price2'>Rs. 1850.00</h5>
                                        </Card.Text>
                                        <Button id='button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/' target="_blank">Visit Website </a><LanguageIcon id='ic' /></Button>
                                        <Button id='button2' variant="danger"><a id='buy' href='https://www.jaypore.com/pink-acacia-wood-net-floral-series-wall-plate-p724826' target="_blank">Buy Now</a></Button>
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

export default Wall