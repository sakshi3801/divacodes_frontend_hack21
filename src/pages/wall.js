import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'
import { ShoppingCart} from '@material-ui/icons';
import wall1 from '../images/product/wall1.jpeg'
import wall2 from '../images/product/wall2.jpg'
import wall3 from '../images/product/wall3.jpg'
import metal4 from '../images/product/metal19.jpg'
import metal5 from '../images/product/metal4.jpg'
import metal6 from '../images/product/metal18.jpg'
import metal9 from '../images/product/metal9.jpg'
import metal12 from '../images/product/metal12.jpg'
import metal14 from '../images/product/metal14.jpg'
import LanguageIcon from '@material-ui/icons/Language';
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
           <Card.Img variant="top" src={wall1} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Pink Acacia Wood Net Floral Series Wall Plate</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1850.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/pink-acacia-wood-net-floral-series-wall-plate-p724826'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={wall2} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">The Jaipur Royal Elephant Table Decoration Showpiece</Card.Title>
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
           <Card.Img variant="top" src={metal4} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Brass Lord Ganesha on Rocking Chair Antique Showpiece</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ajio.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ajio.com/ecraftindia-brass-lord-ganesha-on-rocking-chair-antique-showpiece/p/461557104_brown'>Buy Now</a></Button>
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
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.homecentre.in/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.homecentre.in/in/en/Decor/Home-Accessories/Vases/HOMECENTRE-Stellar-Fantasy-N-Celestial-Textured-Tall-Single-Pc-Vase--Stoneware--Gold/p/1000008417741'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={metal6} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Peacock Green Hand Painted Brass Utsav Masaldan
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 3430.00</span> <h5 id = 'price2'>Rs. 2990.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/peacock-green-and-gold-hand-painted-brass-utsav-masaldan-h-175-in-dia-65in-p671829'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={metal14} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Brass Urli (L- 8in, W- 9in, H- 9.5in)</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/'>Visit Website </a><LanguageIcon /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/brass-urli-l-8in-w-9in-h-95in-p585573'>Buy Now</a></Button>
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
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.artisansoul.in/'>Visit Website </a><LanguageIcon /></Button>
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
    )
}

export default Lamps