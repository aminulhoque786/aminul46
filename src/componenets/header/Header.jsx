import React from 'react'
import "./header.css"
import logo from "../../assets/logo.png"
import logo1 from "../../assets/vector.png"
import { Container,Nav,Navbar ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <section id="header">

<Navbar expand="lg" className="menu">
      <Container>
       <img src= {logo} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto menu">
            <Link to="/">Home</Link>
            <Link to="/about">   About  </Link>
            <Link to="/Service">   Service  </Link>
           
            <Nav.Link href="#link">Contact</Nav.Link>
           
          </Nav>
          <div className="tye">
        <Button variant="primary" size="lg">
        <img src={logo1} alt="" />

        Download
        </Button>{' '}
        
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </section>




  )
}

export default Header