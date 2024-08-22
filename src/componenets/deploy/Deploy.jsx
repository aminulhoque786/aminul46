import React from 'react'
import "./deploy.css"
import img from "../../assets/vect.png"
import DeployReusable from '../reusable/DeployReusable'
import { Container, Row,Col } from 'react-bootstrap'
const Deploy = () => {
  return (
   <section id="deploy">
<Container>
<Row>
<Col lg={4}>
<div className="roy">
<DeployReusable  title=" Immediate Deployment  " text="Et vero eos et accusamus et 
iusto odio dignissimos" image={img}  />
</div>

</Col>
<Col lg={4}>

<DeployReusable  title="Immediate " text="Et vero eos et accusamus et 
iusto odio dignissimos" image={img}  />
</Col>
<Col lg={4}>
<DeployReusable  title="Deployment" text="Et vero eos et accusamus et 
iusto odio dignissimos" image={img}  />
</Col>

</Row>

</Container>
   </section>
  )
}

export default Deploy