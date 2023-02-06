import {Container, Row, Col, Carousel, CarouselItem} from "react-bootstrap";
import qualifications from '../assets/img/qualifications.webp';

export const Qualifications = () => {

    return (
        <section className="banner container-fluid" id="qualifications">
            <Container>
                <Row>
                    <h1>My Qualifications</h1>
                    <p>I have completed the following qualifications.</p>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <Carousel fade>
                        <CarouselItem>
                                <img src={qualifications} alt="Graduation"/>
                                <Carousel.Caption>
                                        <h2><mark>BA Psych - Bachelor of Arts in Psychology</mark></h2>
                                        <p><mark>I have successfully completed a Bachelors Degree in Psychology at <a href="https://www.unisa.ac.za">UNISA</a> - University of South Africa.</mark></p>  
                                </Carousel.Caption>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={qualifications} alt="Graduation"/>
                                <Carousel.Caption>
                                    <h2><mark>Hon Psych - Honours Degree in Psychology</mark></h2>
                                    <p><mark>I have successfully completed an Honours Degree in Psychology at <a href="https://www.unisa.ac.za">UNISA</a> - University of South Africa.</mark></p>
                                </Carousel.Caption>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={qualifications} alt="Graduation"/>
                                <Carousel.Caption>
                                        <h2><mark>Hugenote</mark></h2>
                                        <p><mark>I have successfully completed a Christian Counselling Diploma Course at the <a href="https://www.hugenote.com">Hugenote College</a>.</mark></p>  
                                </Carousel.Caption>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={qualifications} alt="Graduation"/>
                                <Carousel.Caption>
                                    <h2><mark>Human Resources</mark></h2>
                                    <p><mark>I have successfully completed a Human Resource Management Course at <a href="https://www.varsitycollege.co.za">Varsity College</a>.</mark></p>
                                </Carousel.Caption>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={qualifications} alt="Graduation"/>
                                <Carousel.Caption>
                                    <h1><mark>Various Counselling Courses</mark></h1>
                                    <p><mark>I have successfully completed various counselling courses at the following organizations <a href="https://www.lifeline-sa.co.za">Lifeline SA</a>, <a href="https://www.childlinesa.org.za">Childline SA</a> and Open Door.</mark></p>
                                </Carousel.Caption>
                            </CarouselItem>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}