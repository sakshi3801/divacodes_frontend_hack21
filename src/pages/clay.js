import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'
import { ShoppingCart} from '@material-ui/icons';
import lamp1 from '../images/product/shopping.webp'
import clay2 from '../images/product/clay2.jpg'
import clay3 from '../images/product/clay7.jpeg'
import clay4 from '../images/product/clay8.jpg'
import clay5 from '../images/product/clay5.jpeg'
import clay6 from '../images/product/clay6.jpg'
import clay7 from '../images/product/clay9.jpg'
import lamp7 from '../images/product/lamp9.jpg'
import lamp8 from '../images/product/lamp10.jpg'
import './product.css'

function Lamps() {
    return (
        <>
        <NavbarComp />
        <div id='shop'>
        <h2 id='category'>Clay-Close to Mother Earth</h2>
<div id='card'>
       <CardDeck id='cardDeck'>
       <Row id='cardRow' >
       <Col md={3} className='cardCol'>
           <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay7} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Brass Antique Finish Village Bullock Cart showpiece</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1850.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://decorifylife.com/index.php/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://decorifylife.com/index.php/terracotta-earthenware-indian-traditional-dancing-figure-tea-kettele'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay5} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 3430.00</span> <h5 id = 'price2'>Rs. 2990.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.flipkart.com/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.flipkart.com/khushi-lord-buddha-embosed-palm-buddha-hand-black-gold-decorative-showpiece-10-cm/p/itmb3b3cdd228291'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay3} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://in.availeverything.com/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://in.availeverything.com/product/Terracotta-Hand-painted-Earthen-Warli-Vases-for-Home-Dcor-Set-of-3--Vases-Set-LuJLM'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>


       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay4} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/?gclid=Cj0KCQjw_dWGBhDAARIsAMcYuJzBmvjDe9AR9ypXZzxdgq3uiJ6z9BDjbgRP_iE6oZiolt9ETmTGCxMaArSmEALw_wcB'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/white-and-blue-off-handcrafted-ceramic-studio-pottery-teapot-with-cane-handle-1000ml-dia-6in-h-10in-p671807'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       </Row>

       <Row id='cardRow' >
       <Col md={3} className='cardCol'>
           <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src='https://vincraft.in/wp-content/uploads/2019/06/VC854.jpg.webp' className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Brass Antique Finish Village Bullock Cart showpiece</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1850.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://vincraft.in/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRl8HP-7qA6ApuNxG2Z5a1vAdzy-0zN0xZ54OdFeyVnzM3bnt8MweAOFNzZjg9eL-q3gvbez4XUTKsYpbtFOF6Oj5zPhLut2Q&usqp=CAE' className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 3430.00</span> <h5 id = 'price2'>Rs. 2990.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://pinkwinkgirl.com/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://pinkwinkgirl.com/product/traditional-indian-terracotta-art-wall-hanging-for-home-5/'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSRUkJ7PHo2lQjpurzsnAXpLUD5-c0e3B8IbodRjZ-sjPxv0qZDNtVI-sWeZR8XUMxbBaF3TIsYoG8uKh5oT9igv81MZxRfIiuCzV6ZROk3Dtm_VYNtNSasHg&usqp=CAE' className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.claymango.com/index.php'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.claymango.com/productdisplay.php?viewone=h435'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay6} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://turquoisethestore.com/'>Visit Website</a><ShoppingCart /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://turquoisethestore.com/collections/pottery/products/terracotta-teapot-stone-age-mugs'>Buy Now</a></Button>
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