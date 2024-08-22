import React from 'react'
import "./footer.css"
import { Col, Container,Row } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section id="footer">
<Container>
    <Row>
<Col lg={6}>
<div className="tank">

<img src={logo} alt="" />
<p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
</div>
</Col>
<Col lg={6}>
<Row>
<Col lg={3}>
<div className="ugu">

<h4>Features</h4>
 
<Link to="/">   Home   </Link>
            <Link to="/about">   About  </Link>
            <Link to="/service">   Services  </Link>
            <Link to="/work">   works  </Link>
            <Link to="/blog">   Blog   </Link>
</div>

</Col>
<Col lg={5}>
<div className="nugu">

<h4>Products</h4>
<a href="">Task managment</a>
<a href="">Company growth</a>
 <a href="">Time tracking</a>
</div>
</Col>
<Col lg={4}>
<div className="lugu">

<h4>Support</h4>
<a href="">Customer service</a>
<a href="">Accesbility</a>
<a href="">Contact us</a>
</div>
</Col>
</Row>
</Col>
    </Row>
    <Row>
     <Col lg={7}>
     <div className="pus">
      <h3>@20204 Innovate.All rights reserved.</h3>
      <h2>Design by:Kazi Aminul hoque</h2>
     </div>
     
     </Col>
<Col lg={4}>
<Row>
  <Col lg={6}>
  <div className="gud">

  <h3>Privacy policy</h3>
  </div>
  </Col>
  <Col lg={6}>
  <div className="gud">

  <h3>Terms & condition</h3>
  </div>
  </Col>
</Row>
</Col>

    </Row>
</Container>
    </section>
  )
}

export default Footer