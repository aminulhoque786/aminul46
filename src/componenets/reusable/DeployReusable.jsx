import React from 'react'
import { Container,Card } from 'react-bootstrap'
import "./deployreusable.css"

const DeployReusable = ({text,title,image}) => {
  return (
   <section id="text">
<Container>

<div className="deploying">
    <img src={image} alt="" />
<div className="hipe">
    <h2> {title}  </h2>
    <p>{text}</p>
</div>
</div>

</Container>

   </section>
  )
}

export default DeployReusable