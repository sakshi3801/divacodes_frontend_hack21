import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import best1 from '../images/home/best1.jpeg'
import best2 from '../images/home/best2.jpg'
import best3 from '../images/home/best5.jpg'
import best4 from '../images/home/best4.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {ShoppingCart} from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';
import './BestSellers.css'

const BestSellers = ()=>{

    return(
        <div id='shop'>
        <h2 id='cat'>Best Sellers</h2>
<div id='card'>
        <CardDeck id='cardDeck'>
        <Row id='cardRow' >
        <Col md={3} xs={6} className='cardCol'>
            <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={best1} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Golden Handcrafted Buddha Palm</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 1313.00</span> <h5 id = 'price2'>Rs. 999.00</h5>
    </Card.Text>
    <div id='button' className='mr-auto'>
    <Button id= 'button1' variant="outline-secondary">Add to cart  <LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger">Buy Now</Button>
    </div>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} xs={6} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={best2} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Lord Ganesha on Rocking Chair </Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 1657.00</span> <h5 id = 'price2'>Rs. 1450.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary">Add to cart  <LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger">Buy Now</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} xs={6} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={best3} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Five Steps Cylinderical Water Fountain</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 2615.00</span> <h5 id = 'price2'>Rs. 2399.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary">Add to cart  <LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger">Buy Now</Button>
            </Card.Body>
            </Card>
        </Col>

        <Col md={3} xs={6} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={best4} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Wrought Iron Bansuri Ganesha Wall Hanging</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 1222.00</span> <h5 id = 'price2'>Rs. 1100.00</h5>
    </Card.Text>
    <div id='en'>
    <Button id= 'button1' variant="outline-secondary">Add to cart  <LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger">Buy Now</Button>
    </div>
            </Card.Body>
            </Card>
        </Col>
        </Row>
        </CardDeck>
        </div>
        </div>

    )
}

export default BestSellers