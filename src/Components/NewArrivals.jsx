import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import new1 from '../images/home/new1.jpg'
import new2 from '../images/home/new2.jpeg'
import new3 from '../images/home/new3.jpg'
import new4 from '../images/home/new4.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ShoppingCart} from '@material-ui/icons';
import './NewArrivals.css'

const NewArrivals = ()=>{

    return(
        <div id='shop'>
         <h2 id='cat'>New Arrivals</h2>
<div id='card'>
        <CardDeck id='cardDeck'>
        <Row id='cardRow' >
        <Col md={3} className='cardCol'>
            <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={new1} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Brass Antique Finish Village Bullock Cart showpiece</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 2000.00</span> <h5 id = 'price2'>Rs. 1850.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary">Add to cart  <ShoppingCart /></Button>
    <Button id= 'button2' variant="danger">Buy Now</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={new2} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Black Wire Mesh Pendant Light, Ceiling Hanging Lamp</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 3430.00</span> <h5 id = 'price2'>Rs. 2990.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary">Add to cart  <ShoppingCart /></Button>
    <Button id= 'button2' variant="danger">Buy Now</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={new3} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Set of Three Loving Couple in Rain Texture UV Art Painting</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 2300.00</span> <h5 id = 'price2'>Rs. 2000.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary">Add to cart  <ShoppingCart /></Button>
    <Button id= 'button2' variant="danger">Buy Now</Button>
            </Card.Body>
            </Card>
        </Col>

        <Col md={3} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={new4} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Shehnai Shape Papier-Mache Wooden Handcrafted Wall Clock</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 1500.00</span> <h5 id = 'price2'>Rs. 1111.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary">Add to cart  <ShoppingCart /></Button>
    <Button id= 'button2' variant="danger">Buy Now</Button>
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