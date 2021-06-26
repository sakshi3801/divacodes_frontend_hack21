import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'
<<<<<<< HEAD

function Metal() {
    return (
        <div>
            <NavbarComp />
            <div>
                <h1 className="text-2xl text-center p-3">Metal-Lustre and Strength together</h1>
            </div>
            <div>
                <CardDeck id='cardDeck'>
                    <Row id='cardRow' >
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIOyjKu77ycT-29cvkE4D15eEA4dMFmCajAGBMaQyFVDDd0ZWDYhfuRFcKQaUg_rcQwMP7spsLwXnXhRpLsUDNzkbnym_cxYuLsRBMhLKE&usqp=CAE" className='cardImg' />

                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>


                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://theindiacrafthouse.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://theindiacrafthouse.com/products/the-india-craft-house-bastar-tribal-curio-musical-man-figurine-large-svc02i?variant=39575123689663&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top"
                                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTp19c7IYtQXIVPWDf-2d_akz8pjGnpzfoi5DxujLJ94vC1R-ZEShNW-IsOTSYy7IcvcQ2xfKPFoiFCqkTof-ma7inQbdKqT7nQplyNjwtykFSZLaWuekl8&usqp=CAE"
                                    className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://pratibhaart.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://pratibhaart.com/products/bastar-art-jali-nandi?variant=32862739464269&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0408/0238/6087/products/11_38d15aea-b125-4cf8-862d-9c2a49e1d7fd_1024x1024.jpg?v=1595671916" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.golkondacraftsbanjarahills.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://www.golkondacraftsbanjarahills.com/products/copy-of-bidri-pen-holder?variant=35416574787751&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row id='cardRow' >
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAaS0m_B1Kb86_7EikjTCMwYlTHEeWnZSrm9KimH1zwK456R4FjgQewBfrQ9uyhbkljbJUj3DCAXOpN68-Py4OPqjFyUL9GmNhLYggkZG-etb8AJaldQsQfA&usqp=CAE" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://okhai.org/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://okhai.org/products/dhokra-craft-stationery-holder-jaali?variant=34431258001574&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5OPP-K8vEScf7Ev9GJA84F9evzXRTZwiRQEQgypcoyntl9prpPuVeU1iKFLscytyp8YZjnATdtXqmSa7PchjJwtVxAsDmqo2J3bHE0-0S&usqp=CAE" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://vintagegulley.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div><a href="https://vintagegulley.com/products/copy-of-handmade-brass-dhokra-bankura-horse?variant=39797028815003&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic" target=" _blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqiAieMe4YfqEZAWiWQpgfKXUyEhamyXViavZkiMKn77M0igE_DdQ3uBWd6dkKiRjI-NlYoeErRNxbhTYYwfnajuz7L7XETPiSVN-z0_oYyIP1jznyF6qFdw&usqp=CAE" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.artisansoul.in/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://www.artisansoul.in/products/authentic-dokra-art-from-odisha-dancing-women" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row id='cardRow' >
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnCYFDtAcsbkBnPe9dz5p1aJ2SsWnrIzrg2btY3hSQY0oWywCwKTWzE_t3T3u_fWzQn-Z9RsEnd2DZZQmOG3xKm8f-3f_VRgonF7Ronf-IcUrnkpaxMRbm0A&usqp=CAE" className='cardImg' />

                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>


                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://okhai.org/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://okhai.org/products/bidri-handcrafted-box-5-lala-work?variant=39257017123009&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://www.indianshelf.in/file/media/2021-04/51514Handmade-Tara-Buddha-Face-Brass-Wall-Hanging-MWA-92-(1).JPG" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.indianshelf.in/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://www.indianshelf.in/handmade-tara-buddha-face-brass-wall-hanging/" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className='cardCol'>
                            <Card className="focus mt-2 mb-2" id='section'>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-8IDs2kV5yVss2JZerEVF2zokqwDVbvE7xMkbKuJLT_exPTX5wFLKj-NTuSa8y7ds0iPCsJk7Fldm7uPwC-etzFDDnVzOCvVVzzJ3e83ewiefBbvGZtYvvCg&usqp=CAE" className='cardImg' />
                                <Card.Body className='cardBody'>
                                    <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button id='button 1' variant="outline-secondry" block><div><a href="https://www.jaypore.com/" target="_blank">Go to Website</a></div></Button>
                                    <Button id='button 2' variant="outline-danger" block>
                                        <div>
                                            <a href="https://www.jaypore.com/brass-urli-l-8in-w-9in-h-95in-p585573" target="_blank">Buy Now</a>
                                        </div>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardDeck>
            </div>
            <Footer />
        </div>


=======
import { ShoppingCart} from '@material-ui/icons';
import metal1 from '../images/product/metal1.webp'
import metal2 from '../images/product/metal2.webp'
import clay3 from '../images/product/clay7.jpeg'
import metal4 from '../images/product/metal3.jpeg'
import metal5 from '../images/product/metal4.jpg'
import metal6 from '../images/product/metal5.jpg'
import clay7 from '../images/product/clay9.jpg'
import lamp7 from '../images/product/lamp9.jpg'
import lamp8 from '../images/product/lamp10.jpg'
import './product.css'

function Lamps() {
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
     <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1850.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.myntra.com/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.myntra.com/showpieces/ecraftindia/ecraftindia-set-of-2-white-meenakari--metal-swans-showpieces/1611515/buy?utm_source=perf_google_PLA&utm_medium=perf_google_PLA&utm_campaign=PLA-SmartShopping-Top-Category&gclid=Cj0KCQjw_dWGBhDAARIsAMcYuJyWEWZiimDL-iQoXhzR1IXRPuavqDquNUsQPNU9m0srocSKvjI6v78aAv6oEALw_wcB'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={metal2} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 3430.00</span> <h5 id = 'price2'>Rs. 2990.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.myntra.com/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.myntra.com/showpieces/ecraftindia/ecraftindia-gold-toned--red-stone-studded-brass-elephant-showpiece/11025470/buy'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAaS0m_B1Kb86_7EikjTCMwYlTHEeWnZSrm9KimH1zwK456R4FjgQewBfrQ9uyhbkljbJUj3DCAXOpN68-Py4OPqjFyUL9GmNhLYggkZG-etb8AJaldQsQfA&usqp=CAE' className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://okhai.org/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://okhai.org/products/dhokra-craft-stationery-holder-jaali?variant=34431258001574&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>


       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={metal4} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Brass Lord Ganesha Savari Antique Showpiece</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.flipkart.com/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.flipkart.com/flipkart-perfect-homes-brass-lord-ganesha-savari-antique-showpiece-decorative-11-cm/p/itm02fd277f866e7'>Buy Now</a></Button>
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
     <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1850.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.homecentre.in/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.homecentre.in/in/en/Decor/Home-Accessories/Vases/HOMECENTRE-Stellar-Fantasy-N-Celestial-Textured-Tall-Single-Pc-Vase--Stoneware--Gold/p/1000008417741'>Buy Now</a></Button>
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
     <span id='price1'>Rs 3430.00</span> <h5 id = 'price2'>Rs. 2990.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.pepperfry.com/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.pepperfry.com/gold-brass-lord-krishna-with-flute-idol-by-statue-studio-1755834.html'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-8IDs2kV5yVss2JZerEVF2zokqwDVbvE7xMkbKuJLT_exPTX5wFLKj-NTuSa8y7ds0iPCsJk7Fldm7uPwC-etzFDDnVzOCvVVzzJ3e83ewiefBbvGZtYvvCg&usqp=CAE' className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Brass Urli (L- 8in, W- 9in, H- 9.5in)</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/brass-urli-l-8in-w-9in-h-95in-p585573'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqiAieMe4YfqEZAWiWQpgfKXUyEhamyXViavZkiMKn77M0igE_DdQ3uBWd6dkKiRjI-NlYoeErRNxbhTYYwfnajuz7L7XETPiSVN-z0_oYyIP1jznyF6qFdw&usqp=CAE' className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">AUTHENTIC DOKRA ART FROM ODISHA - DANCING WOMEN PAIR
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.artisansoul.in/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.artisansoul.in/products/authentic-dokra-art-from-odisha-dancing-women'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       </Row>
       </CardDeck>
       </div>
       <Footer />
       </div>
       </>
>>>>>>> 2a019fb7e0ba34ee70f6c9c4b1e009ebb1b80ae9
    )
}

export default Lamps