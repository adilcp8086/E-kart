import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const cartlist = useSelector((state)=>state.cartReducer)
  return (
    <>
        <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:"1"}}>
      <Container>
        <Link to={'/'}>
        <Navbar.Brand href="#home"><img src="https://icon-library.com/images/e-commerce-icon-png/e-commerce-icon-png-5.jpg" alt=""  style={{height:"40px"}} className='me-3'/>E-kart</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-3 ' style={{backgroundColor:"white"}} href='#home'><Link to ={'/wishlist'} style={{color:"black", textDecoration:"none"}}>Wishlist <Badge bg="secondary">{wishlistArray.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border rounded  ' style={{width:"75px",backgroundColor:"white"}}><Link to={'/cart'} style={{textDecoration:"none",color:'black'}}>Cart <Badge bg="secondary"> {cartlist.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header