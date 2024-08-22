import React from 'react'
import "./do.css"
import { Container,Row,Col } from 'react-bootstrap'
import icon from "../../assets/icon2.png"
import lcon from "../../assets/icon1.png"
import ncon from "../../assets/icon3.png"
const Do = () => {
  return (
    <section id="color">
<Container>
    
    <Row>
<Col lg={4}>
<div className="mack">
    <h2>A single-minded focus on getting results.</h2>
    <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
</div>
</Col>


<Col lg={{ span: 7, offset: 1 }}>
<div className="jiku">
<Row>
<Col lg={3}>
<div className="lie">
    <img src={lcon} alt="" />
</div>
</Col>
<Col lg={8}>
<div className="divo">
<h3>Digital products </h3>
<p>By applying behavioral science to customer experience, we design engaging digital products used by millions of people.</p>
</div>

</Col>
</Row>
<Row>
<Col lg={3}>
<div className="lie">
    <img src={icon} alt="" />
</div>
</Col>
<Col lg={8}>
<div className="divo">
<h3>Websites  Design</h3>
<p>From Slack to Facebook, we team up with marketing departments of large companies and startups to deliver award‑winning websites. people.</p>
</div>

</Col>
</Row>
<Row>
<Col lg={3}>
<div className="lie">
    <img src={ncon} alt="" />
</div>
</Col>
<Col lg={8}>
<div className="divo">
<h3>Enterprise software </h3>
<p>We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.people.</p>
</div>

</Col>
</Row>

</div>
</Col>



    </Row>
</Container>

    </section>
  )
}

export default Do