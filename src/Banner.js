import {Container, Row, Col} from "react-bootstrap";
import yolande from './/assets/img/yolandebird.webp';

export const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <h1>Welcome to my website!</h1>
                </Row>
                <br/><br/><br/>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <p>My name is Yolande Bird and I'm a Registered Trauma Counselor based in Durban North, South Africa. I serve both the Durban North and Umhlanga areas.</p>
                        <p>This website is divided into the following sections:</p>
                        <ul>
                            <li>Home Section - this section serves as an introduction to my website.</li>
                            <li>About Section - this section contains information about me, my qualifications and my affiliations.</li>
                            <li>Home Section - this section covers conditions/problems I can help with.</li>
                            <li>Home Section - this section contains a map with my Geo-location, my business hours, my rates as well as a contact form.</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <img src={yolande} className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}