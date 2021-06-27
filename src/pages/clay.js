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
import clay2 from '../images/product/clay2.jpg'
import clay3 from '../images/product/clay7.jpeg'
import clay4 from '../images/product/clay8.jpg'
import clay5 from '../images/product/clay10.jpg'
import clay6 from '../images/product/clay6.jpg'
import clay7 from '../images/product/clay11.jpg'
import lamp7 from '../images/product/lamp9.jpg'
import lamp8 from '../images/product/lamp10.jpg'
import LanguageIcon from '@material-ui/icons/Language';
import './product.css'

function Clay() {
    return (
        <>
        <NavbarComp />
        <div id='shop'>
        <h2 id='category'>Clay-Close to Mother Earth</h2>
<div id='card'>
       <CardDeck id='cardDeck'>
       <Row id='cardRow' >
       <Col md={3} xs={6} className='cardCol'>
           <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay7} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Elae Cup And Saucer (Set Of 4)
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1840.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://freedomtree.in/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://freedomtree.in/collections/coffee-mugs/products/elae-cup-and-saucer-set-of-4' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} xs={6} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay5} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Eli Yellow Handcrafted Ceramic Planter
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1999.00</span> <h5 id = 'price2'>Rs. 1750.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic'/></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/eli-yellow-handcrafted-ceramic-planter-dia-35in-h-45in-p651967?gclid=CjwKCAjwoNuGBhA8EiwAFxomAxgMY1gkARV4T-Bt4KfWDUlF4hwrZiferDVoBC9raWKhfb9q9ondNhoCflAQAvD_BwE' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} xs={6} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay3} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Terracotta Hand painted Earthen Warli Vases
</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1600.00</span> <h5 id = 'price2'>Rs. 1428.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://in.availeverything.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://in.availeverything.com/product/Terracotta-Hand-painted-Earthen-Warli-Vases-for-Home-Dcor-Set-of-3--Vases-Set-LuJLM' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>


       <Col md={3} xs={6} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay4} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Handcrafted Ceramic Studio Pottery Teapot</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 1795.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.jaypore.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.jaypore.com/white-and-blue-off-handcrafted-ceramic-studio-pottery-teapot-with-cane-handle-1000ml-dia-6in-h-10in-p671807' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       </Row>

       <Row id='cardRow' >
       <Col md={3} xs={6} className='cardCol'>
           <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src='https://vincraft.in/wp-content/uploads/2019/06/VC854.jpg.webp' className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Handicraft Indian Cow Incense</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1555.00</span> <h5 id = 'price2'>Rs. 1349.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://vincraft.in/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} xs={6} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRl8HP-7qA6ApuNxG2Z5a1vAdzy-0zN0xZ54OdFeyVnzM3bnt8MweAOFNzZjg9eL-q3gvbez4XUTKsYpbtFOF6Oj5zPhLut2Q&usqp=CAE' className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Traditional Indian terracotta art Wall Hanging</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 2101.00</span> <h5 id = 'price2'>Rs. 1650.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://pinkwinkgirl.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://pinkwinkgirl.com/product/traditional-indian-terracotta-art-wall-hanging-for-home-5/' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} xs={6} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSRUkJ7PHo2lQjpurzsnAXpLUD5-c0e3B8IbodRjZ-sjPxv0qZDNtVI-sWeZR8XUMxbBaF3TIsYoG8uKh5oT9igv81MZxRfIiuCzV6ZROk3Dtm_VYNtNSasHg&usqp=CAE' className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Mandna Bottles - Made out of Terracotta Clay</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1845.00</span> <h5 id = 'price2'>Rs. 1449.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.claymango.com/index.php' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://www.claymango.com/productdisplay.php?viewone=h435' target='_blank'>Buy Now</a></Button>
           </Card.Body>
           </Card>
       </Col>
       <Col md={3} xs={6} className='cardCol'>
       <Card className="focus mt-2 mb-2" id='sec'>
           <Card.Img variant="top" src={clay6} className='cardImg' />
           <Card.Body className='cardBody'>
               <Card.Title className="title text-center  card-title">Terracotta teapot & stone age mugs</Card.Title>
               <Card.Text id='cardText'>
     <span id='price1'>Rs 1050.00</span> <h5 id = 'price2'>Rs. 750.00</h5>
   </Card.Text>
   <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://turquoisethestore.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
   <Button id= 'button2' variant="danger"><a id='buy' href='https://turquoisethestore.com/collections/pottery/products/terracotta-teapot-stone-age-mugs' target='_blank'>Buy Now</a></Button>
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

export default Clay