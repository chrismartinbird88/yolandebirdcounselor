import {Container, Row, Col} from "react-bootstrap";
import affiliations from '../assets/img/affiliations.webp';

export const Affiliations = () => {

    return (
        <section className="banner" id="affiliations">
            <Container>
                <Row>
                    <h1>My Affiliations</h1>
                </Row>
                <br/><br/><br/>
                <Row>
                    <Col xs={12} md={6} xl={6}>
                        <p>I'm affiliated with the following organizations:</p>  
                        <ul>
                            <li><a href="https://www.psyssa.com">PSYSSA - Psychology Society of South Africa</a>.</li>  
                            <li><a href="https://www.hpcsa.co.za/?www.web3389.com">HPCSA - Health Professionals Council of South Africa</a>.</li> 
                            <li><a href="https://www.facebook.com/71Mackeurtanavenue/">Regent Medical Centre - Durban North</a></li>   
                        </ul> 
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <img className="img-fluid" src={affiliations} alt="Affiliation"/>
                    </Col>                   
                </Row>
            </Container>
        </section>
    )
}