import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import new1 from '../images/home/new6.jpg'
import new2 from '../images/home/new2.jpeg'
import new3 from '../images/home/new3.jpg'
import new4 from '../images/home/new4.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import LanguageIcon from '@material-ui/icons/Language';
import './NewArrivals.css'
const NewArrivals = () => {

    return (
        <div id='shop'>
         <h2 id='cat'>New Arrivals</h2>
<div id='card'>
        <CardDeck id='cardDeck'>
        <Row id='cardRow' >
        <Col md={3} xs={6} className='cardCol'>
            <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={new1} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Multicolor Brass Antique Finish Village Bullock Cart - Handmade</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 1550.00</span> <h5 id = 'price2'>Rs. 950.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.indiamart.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger"><a id='buy' href='https://www.indiamart.com/proddetail/brass-antique-finish-village-bullock-cart-23302537448.html' target='_blank'>Buy Now</a></Button>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} xs={6} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={new2} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Set of 3 Loving Couple in Rain Satin Matt Texture UV Art Painting
</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 1099.00</span> <h5 id = 'price2'>Rs. 495.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ecraftindia-shehnai-shape-papier-mache-wooden-handcrafted-wall-clock' target='_blank'>Buy Now</a></Button>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} xs={6} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={new3} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Shehnai Shape Papier-Mache Wooden Handcrafted Wall Clock
</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 2999.00</span> <h5 id = 'price2'>Rs. 1999.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic'/></Button>
    <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ecraftindia-shehnai-shape-papier-mache-wooden-handcrafted-wall-clock' target='_blank'>Buy Now</a></Button>
            </Card.Body>
            </Card>
        </Col>

        <Col md={3} xs={6} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={new4} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 2099.00</span> <h5 id = 'price2'>Rs. 1099.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ilamp_cl01-ecraftindia-black-wire-mesh-pendant-light-ceiling-hanging-lamp-for-home-living-room-offices-restaurants' target='_blank'>Buy Now</a></Button>
            </Card.Body>
            </Card>
        </Col>
        </Row>
        </CardDeck>
        </div>
        </div>

    )
}

export default NewArrivals