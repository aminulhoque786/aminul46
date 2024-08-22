import React from 'react'
import "./havereusable.css"
import { Card } from 'react-bootstrap'
const HaveReusable = ({title,text,img}) => {
  return (
    <section id="haves">
        <div className="mug">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
      
      </Card.Body>
    </Card>
</div>
        
    </section>
  )
}

export default HaveReusable