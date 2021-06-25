import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Lamps() {
    return (

        <div>
            <CardDeck id='cardDeck'>
                <Row id='cardRow' >
                    <Col md={4} className='cardCol'>
                        <Card className="focus mt-2 mb-2" id='section'>
                            <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQklc4KnL4xRNxVnLPZfjApnrwmV7I9kMtPJy9ePHLwJrt9i77UmJShGp_zPfaxOBJ18cxWOMMi_-66m0x4v17fX8idG_MMVXyG4BVVEUI&usqp=CAE" className='cardImg' />

                            <Card.Body className='cardBody'>
                                <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                <Card.Text>


                                </Card.Text>
                                <Button id='button 1' variant="outline-secondry" block><div><a href="https://vincraft.in/">Go to Website</a></div></Button>
                                <Button id='button 2' variant="outline-danger" block>
                                    <div>
                                        <a href="https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/">Buy Now</a>
                                    </div>
                                </Button>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='cardCol'>
                        <Card className="focus mt-2 mb-2" id='section'>
                            <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTK7or4U6Xq0hXgA-zTzusw4E5pOy8cT_-bLkfSuCAsouFzZg0RIGP8rJpNLz59khE1F_VDANEJKrJ0rZ2sxTM02QJfoLwTPVpIXrrCe20&usqp=CAE" className='cardImg' />
                            <Card.Body className='cardBody'>
                                <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button id='button 1' variant="outline-secondry" block><div><a href="https://vincraft.in/">Go to Website</a></div></Button>
                                <Button id='button 2' variant="outline-danger" block>
                                    <div>
                                        <a href="https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/">Buy Now</a>
                                    </div>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className='cardCol'>
                        <Card className="focus mt-2 mb-2" id='section'>
                            <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTK7or4U6Xq0hXgA-zTzusw4E5pOy8cT_-bLkfSuCAsouFzZg0RIGP8rJpNLz59khE1F_VDANEJKrJ0rZ2sxTM02QJfoLwTPVpIXrrCe20&usqp=CAE" className='cardImg' />
                            <Card.Body className='cardBody'>
                                <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button id='button 1' variant="outline-secondry" block><div><a href="https://vincraft.in/">Go to Website</a></div></Button>
                                <Button id='button 2' variant="outline-danger" block>
                                    <div>
                                        <a href="https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/">Buy Now</a>
                                    </div>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*<Row id='cardRow' >
                    <Col md={4} className='cardCol'>
                        <Card className="focus mt-2 mb-2" id='section'>
                            <Card.Img variant="top" src={clay} className='cardImg' />
                            <Card.Body className='cardBody'>
                                <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                <Card.Text>
                                    </Card.Text>
                                <Button id='wallButton' variant="danger" size="lg" block><div><a href="https://vincraft.in/">Go to Website</a></div></Button>
                                <Button id='wallButton' variant="danger" size="lg" block>
                                    <div>
                                        <a href="https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/">Buy Now</a>
                                    </div>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='cardCol'>
                        <Card className="focus mt-2 mb-2" id='section'>
                            <Card.Img variant="top" src={clay} className='cardImg' />
                            <Card.Body className='cardBody'>
                                <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                <Card.Text>
                                   
                                </Card.Text>
                                <Button id='wallButton' variant="danger" size="lg" block><div><a href="https://vincraft.in/">Go to Website</a></div></Button>
                                <Button id='wallButton' variant="danger" size="lg" block>
                                    <div>
                                        <a href="https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/">Buy Now</a>
                                    </div>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='cardCol'>
                        <Card className="focus mt-2 mb-2" id='section'>
                            <Card.Img variant="top" src={clay} className='cardImg' />
                            <Card.Body className='cardBody'>
                                <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Button id='wallButton' variant="danger" size="lg" block><div><a href="https://vincraft.in/">Go to Website</a></div></Button>
                                <Button id='wallButton' variant="danger" size="lg" block>
                                    <div>
                                        <a href="https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/">Buy Now</a>
                                    </div>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row id='cardRow' >
                    <Col md={4} className='cardCol'>
                        <Card className="focus mt-2 mb-2" id='section'>
                            <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQklc4KnL4xRNxVnLPZfjApnrwmV7I9kMtPJy9ePHLwJrt9i77UmJShGp_zPfaxOBJ18cxWOMMi_-66m0x4v17fX8idG_MMVXyG4BVVEUI&usqp=CAE" className='cardImg' />

                            <Card.Body className='cardBody'>
                                <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                <Card.Text>


                                </Card.Text>
                                <Button id='wallButton' variant="danger" size="lg" block><div><a href="https://vincraft.in/">Go to Website</a></div></Button>
                                <Button id='wallButton' variant="danger" size="lg" block>
                                    <div>
                                        <a href="https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/">Buy Now</a>
                                    </div>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='cardCol'>
                        <Card className="focus mt-2 mb-2" id='section'>
                            <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTK7or4U6Xq0hXgA-zTzusw4E5pOy8cT_-bLkfSuCAsouFzZg0RIGP8rJpNLz59khE1F_VDANEJKrJ0rZ2sxTM02QJfoLwTPVpIXrrCe20&usqp=CAE" className='cardImg' />
                            <Card.Body className='cardBody'>
                                <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button id='wallButton' variant="danger" size="lg" block><div><a href="https://vincraft.in/">Go to Website</a></div></Button>
                                <Button id='wallButton' variant="danger" size="lg" block>
                                    <div>
                                        <a href="https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/">Buy Now</a>
                                    </div>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className='cardCol'>
                        <Card className="focus mt-2 mb-2" id='section'>
                            <Card.Img variant="top" src={metal} className='cardImg' />
                            <Card.Body className='cardBody'>
                                <Card.Title className="title text-center  card-title">Clay Items</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button id='wallButton' variant="danger" size="lg" block><div><a href="https://vincraft.in/">Go to Website</a></div></Button>
                                <Button id='wallButton' variant="danger" size="lg" block>
                                    <div>
                                        <a href="https://vincraft.in/home-decor/indian-handicrafts/handicraft-indian-cow-incense/">Buy Now</a>
                                    </div>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
    </Row>*/}
            </CardDeck>
        </div>

    )
}

export default Lamps
