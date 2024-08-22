import React from 'react'
import "./have.css"
import { Container,Nav,Card, Row, Col } from 'react-bootstrap'
import HaveReusable from '../reusable/HaveReusable'
import img from "../../assets/shock.webp"
import img1 from "../../assets/alone.webp"
import img2 from "../../assets/ashpika.webp"
import img3 from "../../assets/sweet.jfif"
import img4 from '../../assets/cute.webp'
import img5 from "../../assets/detect.webp"
import img6 from "../../assets/petect.webp"
import img7 from "../../assets/joss.webp"

const Have = () => {
  return (
   <section id="have">
<Container>
    <div className="kui">
        <h2>our works</h2>
    </div>
<Row>
<Col lg={4}>
<div className="juo">
<HaveReusable text="Business Planning" title="Business Growth" img={img} />
</div>
</Col>
<Col lg={4}>
<div className="juo">
<HaveReusable text="Business Spread" title="Marketing Strategy" img={img1} />
</div>
</Col>
<Col lg={4}>
<div className="juo">
<HaveReusable text="Business Planning" title="Market Research" img={img2} />
</div>
</Col>

</Row>
<Row>
<Col lg={4}>
<div className="juo">
<HaveReusable text="Human Resources" title="SEO Optimizations" img={img3} />
</div>
</Col>
<Col lg={4}>
<div className="juo">
<HaveReusable text="Digitalisation & IT" title="SEO Optimizations" img={img4} />
</div>
</Col>
<Col lg={4}>
<div className="juo">
<HaveReusable text="Data Analytics" title="Business Growth" img={img5} />
</div>
</Col>

</Row>
<Row>
<Col lg={4}>
<div className="juo">
<HaveReusable text="Business Planning" title="Data analyist" img={img6} />
</div>
</Col>
<Col lg={4}>
<div className="juo">
<HaveReusable text="Business Spread" title="Marketing Strategy" img={img7} />
</div>
</Col>


</Row>


</Container>
   </section>
  )
}

export default Have