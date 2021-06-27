import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { SearchOutlined, ShoppingCart} from '@material-ui/icons'
import './NavbarComp.css'
import {Link} from 'react-router-dom'

const NavbarComp = ()=>{

    return(
        <>
    <Navbar className='sticky-top' id='navbar' collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home" id='brand'><span id='brandF'>Craft </span><span id='brandL'>Moon</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
            
            <input placeholder='Search for item' type='text' />
            <SearchOutlined />
        </div>
    </div>
    <Nav className="ml-auto" id='middle'>
    <Link id='routerLink' to='/Customer'><Nav.Link id='navItem' href="#features">Customer service</Nav.Link></Link>
    <Link id='routerLink' to='/login'><Nav.Link id='navItem' href="#pricing">Login</Nav.Link></Link>
    <Link id='routerLink' to='/register'><Nav.Link id='navItem' href="#deets">Register</Nav.Link></Link>
    <Link id='routerLink' to='/joinus'><Nav.Link id='navItem' href="#deets">Join Us</Nav.Link></Link>
      <Nav.Link id='navItem' href="#memes"><ShoppingCart id='cart' />Cart</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
        </>

    )
}

export default NavbarComp
