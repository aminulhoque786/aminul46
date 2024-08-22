import React from 'react'
import "./empower.css"
import { Container,Button, Col ,Row} from 'react-bootstrap'
import bell from "../../assets/bell.png"
import hero from "../../assets/hero.png"
const Empower = () => {
  return (
    <section id="banner">
<Container>
<Row>

    <Col lg={5} >
    <div className="nye">
        <Button variant="primary" size="lg">
        <img src={bell} alt="" />

        Startup Business
        </Button>{' '}
        
      </div>
<div className="you">
    <h2>Empowering startups to fuel
    their business growth</h2>
      
      <p> Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,<br />
 velit
nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
</div>
<div className="jye">
        <Button variant="primary" size="lg">
        

        Get started now 
        </Button>{' '}
        
      </div>
    </Col>

<Col lg={7}>
<div className="hero">
    <img src={hero} alt="" />
</div>
</Col>

</Row>



</Container>


    </section>



  )
}

export default Empower