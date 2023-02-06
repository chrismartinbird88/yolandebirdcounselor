import {Container, Row, Col} from 'react-bootstrap';            
import yolande from '../assets/img/yolandebird.webp';

export const Bio = () => {

    return (
        <section className="banner container-fluid" id="bio">
            <Container>
                <Row>
                    <h1>My Bio</h1>
                </Row>
                <br/><br/><br/>
                <Row>
                    <Col xs={12} md={6} xl={6}>
                        <img src={yolande} alt="Yolande Bird Registered Trauma Counselor" className="img-fluid"/>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <p>My name is Yolande Bird and I am a Registered Counsellor in Durban North specializing in trauma, anxiety, stress etc.. I am passionate about helping people overcome any emotional trauma they've experienced. I am fluent in both English and Afrikaans. I've started my practice in 2013 and have experience dealing with any emotional trauma. My office is based in Durban North, Durban, South Africa but I am willing to perform debriefings and other counselling workshops in Durban and Umhlanga.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}