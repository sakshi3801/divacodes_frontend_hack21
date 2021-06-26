import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { SearchOutlined, ShoppingCart } from '@material-ui/icons'
import './NavbarComp.css'

const NavbarComp = () => {

    return (
        <>
            <Navbar id='navbar' collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/" id='brand'><span id='brandF'>Craft </span><span id='brandL'>Moon</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className='sidebar__search'>
                        <div className='sidebar__searchContainer'>

                            <input placeholder='Search for item' type='text' />
                            <SearchOutlined />
                        </div>
                    </div>
                    <Nav className="ml-auto" id='middle'>


                        <Nav.Link id='navItem' href="/Customer">Customer service</Nav.Link>
                        <Nav.Link id='navItem' href="/login">Login</Nav.Link>
                        <Nav.Link id='navItem' href="/register">Register</Nav.Link>
                        <Nav.Link id='navItem' href="/joinus">Join Us</Nav.Link>
                        <Nav.Link id='navItem' href="#memes"><ShoppingCart id='cart' />Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}

export default NavbarComp