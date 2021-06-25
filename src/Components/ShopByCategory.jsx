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
        <div id = 'shop'>
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
      Wall decor items including tapestry, dream catchers, etc.
    </Card.Text>
    <Button id= 'wallButton' variant="danger" size="lg" block>Explore</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='section'>
        <Card.Img variant="top" src={lamp} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Lamp and Lanterns</Card.Title>
                <Card.Text>
                Wide variety of lamps and lanterns in variant ranges.
    </Card.Text>
    <Button id= 'wallButton' variant="danger" size="lg" block>Explore</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='section'>
        <Card.Img variant="top" src={metal} className='cardImg' />
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Metal</Card.Title>
                <Card.Text>
                Metal items including jugs, cutllery, figurines, etc.
    </Card.Text>
    <Button id= 'wallButton' variant="danger" size="lg" block>Explore</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col md={3} className='cardCol'>
        <Card className="focus mt-2 mb-2" id='section'>
        <Link to='/clay'><Card.Img variant="top" src={clay} className='cardImg' /></Link>
            <Card.Body className='cardBody'>
                <Card.Title className="title text-center  card-title">Clay</Card.Title>
                <Card.Text>
      Clay items including flower vases, diyas, figurines, etc.
    </Card.Text>
    <Button id= 'wallButton' variant="danger" size="lg" block>Explore</Button>
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