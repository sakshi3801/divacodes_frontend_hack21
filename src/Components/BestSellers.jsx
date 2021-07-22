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
import { ShoppingCart } from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';
import './BestSellers.css'

const BestSellers = () => {

    return (
        <div id='shop'>
        <h2 id='cat'>Best Sellers</h2>
<div id='card'>
        <CardDeck id='cardDeck'>
        <Row id='cardRow' >
        <Col md={3} xs={12} className='cardCol'>
            <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={best1} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Golden Handcrafted Buddha Palm</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 1999.00</span> <h5 id = 'price2'>Rs. 699.00</h5>
    </Card.Text>
    <div id='button' className='mr-auto'>
    <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ecraftindia-golden-handcrafted-buddha-palm' target='_blank'>Buy Now</a></Button>
    </div>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} xs={12} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={best2} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Lord Ganesha on Rocking Chair showpiece </Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 1499.00</span> <h5 id = 'price2'>Rs. 699.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/agg556-ecraftindia-lord-ganesha-on-rocking-chair-antique-showpiece' target='_blank'>Buy Now</a></Button>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} xs={12} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={best3} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Five Steps Cylinderical Water Fountain</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 2615.00</span> <h5 id = 'price2'>Rs. 2399.00</h5>
    </Card.Text>
    <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ecraftindia-five-steps-cylinderical-water-fountain?variant=26734681030756&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=CjwKCAjwoNuGBhA8EiwAFxomA6P422G6PIsGKRb9iw6AfORJoWBHfbA6l88ZM1x5Vl1sAJZ8_WXc_BoCwZIQAvD_BwE' target='_blank'>Buy Now</a></Button>
            </Card.Body>
            </Card>
        </Col>

        <Col md={3} xs={12} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='sec'>
            <Card.Img variant="top" src={best4} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Wrought Iron Bansuri Ganesha Wall Hanging</Card.Title>
                <Card.Text id='cardText'>
      <span id='price1'>Rs 3499.00</span> <h5 id = 'price2'>Rs. 1495.00</h5>
    </Card.Text>
    <div id='en'>
    <Button id= 'button1' variant="outline-secondary"><a id='buy1' href='https://www.ecraftindia.com/' target='_blank'>Visit Website </a><LanguageIcon id='ic' /></Button>
    <Button id= 'button2' variant="danger"><a id='buy' href='https://www.ecraftindia.com/products/ibg500_a-ecraftindia-wrought-iron-bansuri-ganesha-wall-hanging?variant=31690441392230&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=CjwKCAjwoNuGBhA8EiwAFxomA5ZhZUw2exCZ4YAbtFQLKCU7T_U9a_vDuRaB_O3KRb_oOhcR2oiYLBoCuNkQAvD_BwE' target='_blank'>Buy Now</a></Button>
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