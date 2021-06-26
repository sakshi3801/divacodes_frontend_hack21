import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import wall from '../images/home/wall.jpg'
import lamp from '../images/home/lamp.jpeg'
import metal from '../images/home/metal.jpg'
import clay from '../images/home/clay.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ShopByCategory.css'
import {Link} from 'react-router-dom'

const ShopByCategory = ()=>{

    return(
        <div id='shop'>
        <h2 id='cat'>Shop By Category</h2>
<div id='card'>
        <CardDeck id='cardDeck'>
        <Row id='cardRow' >
        <Col md={3} className='cardCol'>
            <Card className="focus mt-2 mb-2" id='section'>
            <Card.Img variant="top" src={wall} className='cardImg' />
            
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Wall Decor</Card.Title>
                <Card.Text>
      Wall decors including dream catchers, clocks, tapestries, etc.
    </Card.Text>
    <Link id='routerLink' to='/Wall'><Button id= 'wallButton' variant="danger" size="lg" block>Explore</Button></Link>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='section'>
        <Card.Img variant="top" src={lamp} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Lamp and lanterns</Card.Title>
                <Card.Text>
     Lamp and lanterns in affordable ranges.
    </Card.Text>
    <Link id='routerLink' to='/Lamps'><Button id= 'wallButton' variant="danger" size="lg" block>Explore</Button></Link>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='section'>
        <Card.Img variant="top" src={metal} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Metal</Card.Title>
                <Card.Text>
      Metal handmade items including figurines, showpieces, etc.
    </Card.Text>
    <Link id='routerLink' to='/Metal'><Button id= 'wallButton' variant="danger" size="lg" block>Explore</Button></Link>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='section'>
            <Card.Img variant="top" src={clay} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Clay</Card.Title>
                <Card.Text>
      Wide variety of clay items including pots, mugs, etc.
    </Card.Text>
    <Link id='routerLink' to='/Clay'><Button id= 'wallButton' variant="danger" size="lg" block>Explore</Button></Link>
            </Card.Body>
            </Card>
        </Col>

        </Row>
        </CardDeck>
        </div>
        </div>
    )
}

export default ShopByCategory