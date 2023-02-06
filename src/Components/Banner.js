import {Container, Row, Accordion} from "react-bootstrap";

export const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <h1>Welcome to my website!</h1>
                </Row>
                <br/><br/><br/>
                <Row>
                    <p>My name is Yolande Bird and I'm a Registered Trauma Counselor based in Durban North, South Africa. I serve both the Durban North and Umhlanga areas.</p>                        
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>This website is divided into the following sections:</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><a href="/" className="bannerLink">Home Section</a>. - this section serves as an introduction to my website.</li>
                                        <li><a href="#about" className="bannerLink">About Section</a> - this section contains information about me, my qualifications and my affiliations.</li>
                                        <li><a href="#services" className="bannerLink">Services Section</a> - this section covers conditions/problems I can help with.</li>
                                        <li><a href="#contact" className="bannerLink">Contact Section</a> - this section contains a map with my Geo-location, my business hours, my rates as well as a contact form.</li>
                                    </ul>
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
        </section>
    )
}