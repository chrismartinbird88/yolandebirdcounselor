import {Container, Row, Col, Card, Button} from "react-bootstrap";
import yolande from '../assets/img/yolandebird.webp';
import qualifications from '../assets/img/qualifications.webp';
import affiliations from '../assets/img/affiliations.webp';

export const About = () => {

    return (
        <section className="banner container-fluid" id="about">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Card>
                            <Card.Title>
                                <h1>My Bio</h1>
                            </Card.Title>
                            <Card.Img src={yolande} className="ovalImage" alt="Yolande Bird Registered Trauma Counselor"/>
                            <Button href="#bio">View My Bio</Button>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                    <Card>
                        <Card.Title>
                            <h1>My Qualifications</h1>
                        </Card.Title>
                        <Card.Img src={qualifications}  className="ovalImage" alt="Yolande Bird Registered Trauma Counselor"/>
                        <Button href="#qualifications">View Qualifications</Button>
                    </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card>
                            <Card.Title>
                                <h1>My Affiliations</h1>
                            </Card.Title>
                            <Card.Img src={affiliations}  className="ovalImage" alt="Yolande Bird Registered Trauma Counselor"/>
                            <Button href="#affiliations">View Affiliations</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}