import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'
import { ShoppingCart} from '@material-ui/icons';
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
<<<<<<< HEAD
        <div>
            <div>
                <h1 className="text-2xl text-center p-3">Wall-The strong frameworks</h1>
            </div>
            <div>
                <CardDeck id='cardDeck'>
                    <Row id='cardRow' >
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9iQquf43RLtO5mN_y5l1hbLfuuV8aV-Z_31hHfNEKTpG4yxYNSUZFyZXgZMTzVD31gZmoHtN9zGJ9ar6Jrcbf9uTtESFD-PCY505yLg-5jCJEn6xe_Y6tzw&usqp=CAE" className='cardImg' />

                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>


                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.indianshelf.in/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://www.indianshelf.in/brass-round-dhokra-wall-art-hanging/?gclid=Cj0KCQjw2tCGBhCLARIsABJGmZ674ZmwC73_PIH8rvX4hun-MIVMTBW0Z0uzLRfA-UV4suuD18HgcWwaAs_nEALw_wcB" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top"
                                    src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmn9esSSLY5r1-ltPmIrfI2As4shtltcflqv8-YYlGf7hB8E71DbHH-ayD0LsPkECsqlNVD1I4wfRe2RoWtAzBU4vh_iudImG-hz3nX4E&usqp=CAE"
                                    className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.jaipurfabric.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://www.jaipurfabric.com/products/indian-embroidered-wall-decorations-decorative-hanging-wall-hanged-with-precious-stones?gclid=Cj0KCQjw2tCGBhCLARIsABJGmZ5JpcuO91M_oEok3f68m-YSFHano24fc4VYKtMFJsLSB1ZVH7_a3CUaAk6REALw_wcB" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSV-74sVd-eevZfLPQ5t4m8qBhcCjzBPPeUQ7YZ34wa9PY5ZBJQoGN6bsj3Xdcl8d7mVHZR74y6YodRqzrZ4DYUUfBIC3SYTw6UucMhlOBzgScqqU35DYX7lQ&usqp=CAE" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.craftsnchisel.in/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://www.craftsnchisel.in/products/lord-krishna-kerela-mural?variant=34503308935327&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row id='cardRow' >
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqnG-FOxCM80UtkuUpKyYsW94vW8doFW_oXngFzG8Mhq_cgaJVysMbPw6ToykIzFwkxVkR-XHhGQqrOyzAGm3NT-lX6mSuCg&usqp=CAE" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://indianfolkart.org/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://indianfolkart.org/product/chandua-art-wall-decoration-01-indian-handicraft-3-x-3-ft-copy-11/" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS95wstRvU3AW03UTdnLrb65mMSAEiFnjuZCtTuA8NEbKyd0tIdYEf5pgSyxdITIzLy4iIxQ3pWmOucKc1q43lzMjxg39n46Jy3aBSzx5Y&usqp=CAE" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.mirraw.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div><a href="https://www.mirraw.com/designers/handicrafts-paradise/designs/tribal-rajasthani-musical-wall-decor-showpiece-in-metal-set-of-3-pc-8-75-x-14-inch-wall-hanging?country_code=IN" target=" _blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGmm5CA8R5xQ79fswTi0puf_uyKHBd1Bjcw7ynzpMWwblzBB4ykRsFlEL-0otQP3q6R9M5QBOm8ZcD4TgTWqE7rWpyXt9z7fWIRV0kmv5BISVjpZ9_oYq2&usqp=CAE" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.indichues.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://www.indichues.com/products/indichues-large-ganesha-wrought-iron-wall-art?currency=INR&variant=34695104266403&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&utm_source=adyogi&utm_medium=google-ssc&utm_campaign=MYST_6103_adyogi_SmartShopping_&gclid=Cj0KCQjw2tCGBhCLARIsABJGmZ4myaWyLIUu0t28SkspJtL-zs5xZxxCN6FASmkRjcnbP-m0gvQFF4caAtRlEALw_wcB" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row id='cardRow' >
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRyrnJF0zn8HJHZ9KRtDS3zopwsrjGt3IXLEgt-66_JteQhn0YzvWlgzVVlnYMixFqHS6EBUHFxeWnOUzu8z0uwklDIFqioKN-72w-XVVC0B3lva5NOll0Eg&usqp=CAE" className='cardImg' />

                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>


                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.fabindia.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://www.fabindia.com/vriksh-warli-art-wall-plate-large-10665149?utm_source=Google&utm_medium=cpc&utm_campaignid=1630667914&utm_adgroupid=61347548319&utm_keyword=&utm_device=c&utm_placement=&utm_adid={adid}&gclid=Cj0KCQjw2tCGBhCLARIsABJGmZ5ODub5-ELny1-NZZQhwUm9MlttzWVySdS0mp_qtOgwaQEm8V32z4QaAreREALw_wcB" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-002-142_A_110x110@2x.jpg?v=1581072461" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://exclusivelane.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://exclusivelane.com/products/flapping-birdies-handmade-hand-painted-garden-decorative-wall-hanging-in-terracotta-el-002-142" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjQTJcsyGB3lu0vPqBNSXSr0EoRIwqVcpTIZcPvBJ43jOuE-E2nW87j6cDBO7M9EJwOb7ERHPVST8eELv9Q1D3w7PP7HcsS4tVJay3tC5d5qWwSLx8iMBngQ&usqp=CAE" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://wallmantra.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://wallmantra.com/products/modern-warli-painting-wall-hanging-set-of-3-pieces?variant=28980077559901&utm_source=google&utm_medium=cpc&utm_campaign=CedCommerceGoogleShopping" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardDeck>
            </div>
        </div>


=======
        <>
        <NavbarComp />
        <div id='shop'>
        <h2 id='category'>Wall- Give your walls an artistic touch</h2>
<div id='card'>
       <CardDeck id='cardDeck'>
       <Row id='cardRow' >

       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={wall8} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Hippy Mandala Wall Hanging Decorative Handmade Tapestry
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 375.00</span> <h5 id = 'price2'>Rs. 250.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.indiamart.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.indiamart.com/proddetail/hippy-mandala-wall-hanging-decorative-handmade-tapestry-17715880155.html'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={wall2} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Antique Malhar Wall Screen (L - 7.5in ,W - 3in ,H - 21.5in)
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1212.00</span> <h5 id = 'price2'>Rs. 1000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/antique-gold-malhar-wall-screen-l-75in-w-3in-h-215in-iron-p712280'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={wall3} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">GANESH DEEPAK WITH BELL BRASS WALL HANGING AND ARTIFACT
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1623.00</span> <h5 id = 'price2'>Rs. 1349.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.mirraw.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.mirraw.com/designers/ecraftindia/designs/ganesh-deepak-with-bell-brass-wall-hanging-and-artifact-other-home-accessory'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>


       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={wall4} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">LOVE BIRDS SATIN MATT TEXTURE UV ART PAINTING</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 899.00</span> <h5 id = 'price2'>Rs. 530.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.mirraw.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.mirraw.com/designers/ecraftindia/designs/love-birds-satin-matt-texture-uv-art-painting'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       </Row>

       <Row id='cardRow' >
       <Col md={3} className='cardCol'>
           <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={wall5} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Sunrise View Decorative Wooden Handcrafted Wall Clock
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1899.00</span> <h5 id = 'price2'>Rs. 1199.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ecraftindia-sunrise-view-decorative-wooden-handcrafted-wall-clock'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={wall6} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of 3 Floral and Botanical Satin Matt Textured UV Art Painting
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 3430.00</span> <h5 id = 'price2'>Rs. 2990.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ajio.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ajio.com/ecraftindia-set-of-3-floral-and-botanical-satin-matt-textured-uv-art-painting/p/461804512_blue'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={wall7} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Colorful and Vibrant Feather Dream Catcher - Handmade
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 655.00</span> <h5 id = 'price2'>Rs. 450.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://artbodymind.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://artbodymind.com/products/antique-handmade-dream-catcher-peacock-feather-wall-hanging-decoration-wind-chimes-ornament-25-long'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
           <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={wall1} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Pink Acacia Wood Net Floral Series Wall Plate - Handmade</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1850.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/pink-acacia-wood-net-floral-series-wall-plate-p724826'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       </Row>
       </CardDeck>
       </div>
       <Footer />
       </div>
       </>
>>>>>>> 9f5c6d023e678d5e479df3a6f442c4b54986f1fd
    )
}

export default Wall