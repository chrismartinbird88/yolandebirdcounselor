import {Container, Row, Col, Button, Modal} from 'react-bootstrap';
import React, {useState} from 'react';
import anxietyImage from '../assets/img/anxiety.webp';
import ptsdImage from '../assets/img/ptsd.webp';
import stressImage from '../assets/img/stress.webp';
import relationshipImage from '../assets/img/relationship-issues.webp';
import traumaImage from '../assets/img/trauma.webp';
import depressionImage from '../assets/img/depression.webp';

export const Services = () => {

    const [anxiety, setAnxiety] = useState(false);
    const closeAnxiety = () => setAnxiety(false);
    const handleAnxiety = () => setAnxiety(true);

    const [PTSD, setPTSD] = useState(false);
    const closePTSD = () => setPTSD(false);
    const handlePTSD = () => setPTSD(true);

    const [stress, setStress] = useState(false);
    const closeStress = () => setStress(false);
    const handleStress = () => setStress(true);

    const [relationship, setRelationship] = useState(false);
    const closeRelationship = () => setRelationship(false);
    const handleRelationship = () => setRelationship(true);

    const [trauma, setTrauma] = useState(false);
    const closeTrauma = () => setTrauma(false);
    const handleTrauma = () => setTrauma(true);

    const [depression, setDepression] = useState(false);
    const closeDepression = () => setDepression(false);
    const handleDepression = () => setDepression(true);

    return (
        <section className="banner container-fluid" id="services">
            <Container>
                <Row>
                    <h1>Counselling Services</h1>
                    <p>As a registered trauma counselor I'm qualified to help with the following problems:</p>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Button onClick={handleAnxiety} className='service-button'>ANXIETY</Button>
                    </Col>

                    <Modal show={anxiety} onHide={closeAnxiety} backdrop="static" keyboard={true}>

                        <Modal.Header closeButton>
                            <Modal.Title>ANXIETY</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                            <p>Anxiety causes a severe and persistent feeling of worry and/or panic attacks(intense fear that reaches its peak within minutes). Experiencing occasional anxiety is normal but if it interferes with your day-to-day activities then you may have an anxiety disorder.</p>
                            </Row>
                            <Row>
                                <img src={anxietyImage} alt="Anxiety"/>    
                            </Row>   
                            <Row>
                                <p>Warning Signs:</p>
                                <ul>
                                    <li>Avoiding things that cause anxiety.</li>
                                    <li>Have trouble sleeping.</li>
                                    <li>Having trouble concentrating or thinking about the source of anxiety.</li>
                                    <li>Sweating</li>
                                    <li>Trembling</li>
                                    <li>Fealing tired or weak</li>
                                    <li>If you worry constantly.</li>
                                    <li>Experiencing a sense of doom or panic.</li>
                                    <li>Feeling restless.</li>
                                    <li>Hyperventilating</li>
                                </ul>
                            </Row>
                        </Modal.Body>
                    </Modal>

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Button onClick={handlePTSD} className='service-button'>PTSD</Button>
                    </Col>

                    <Modal show={PTSD} onHide={closePTSD} backdrop="static" keyboard={true}>

                        <Modal.Header closeButton>
                            <Modal.Title>PTSD</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                            <p>PTSD - Post Traumatic Stress Disorder is a mental condition that is caused 
                            by a terrifying event eg. Hijacking, Surviving an attack etc.Once triggered
                            PTSD can cause flashbacks, severe anxiety, uncontrollable thoughts about 
                            the event and nightmares. Most people tend to recover from traumatic events
                            after time has passed and with good self care.But if the effects last for 
                            months or even years and affect your day-to-day functioning you may have PTSD.</p>
                            </Row>
                            <Row>
                                <img src={ptsdImage} alt="PTSD"/>    
                            </Row>   
                            <Row>
                                <p>Warning Signs:</p>
                                <ul>
                                    <li>Negative changes in mood.</li>
                                    <li>Avoiding thinking of or talking
                                        about the traumatic event.</li>
                                    <li>Nightmares that include details about
                                        the traumatic event.</li>
                                    <li>Being on guard even when not in danger.</li>
                                    <li>Have trouble sleeping.</li>
                                    <li>Emotional outbursts or irritability.</li>
                                    <li>If you are easily startled or frightened.</li>
                                    <li>Having intense reactions to anything reminding
                                        you of the traumatic event.</li>
                                    <li>Having difficulties with any relationships.</li>
                                    <li>Lack of interest in activities you once enjoyed.</li>
                                </ul>
                            </Row>
                        </Modal.Body>
                    </Modal>

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Button onClick={handleStress} className='service-button'>STRESS</Button>
                    </Col>

                    <Modal show={stress} onHide={closeStress} backdrop="static" keyboard={true}>

                        <Modal.Header closeButton>
                            <Modal.Title>Stress</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <p>Stress is the bodys way of dealing with day-to-day life. 
                                Experiencing occasional stress is normal but if starts to affect your 
                                affecting your health or daily routine you may need professional help.
                                Stress may cause you to feel overwhelmed, affect your productivity, damage 
                                relationships, alter your mood and damage your overall quality of life.</p>
                            </Row>
                            <Row>
                                <img src={stressImage} alt="Stress"/>    
                            </Row>   
                            <Row>
                                <p>Warning Signs:</p>
                                <ul>
                                    <li>Experiencing memory problems.</li>
                                    <li>Constant worrying.</li>
                                    <li>Reckless behaviour due to poor judgement.</li>
                                    <li>Experiecing troubling thoughts.</li>
                                    <li>Feeling overwhelmed.</li>
                                    <li>Experiencing unexplained aches and pain.s</li>
                                    <li>Procrastinating</li>
                                    <li>Developing nervous ticks e.g. pacing, nail biting etc.</li>
                                    <li>Having trouble concentrating.</li>
                                    <li>Irritability</li>
                                </ul>
                            </Row>
                        </Modal.Body>
                    </Modal>

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Button onClick={handleRelationship} className='service-button'>RELATIONSHIP-ISSUES</Button>
                    </Col>

                    <Modal show={relationship} onHide={closeRelationship} backdrop="static" keyboard={true}>

                        <Modal.Header closeButton>
                            <Modal.Title>Relationship-Issues</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <p>Every relationship experiences its ups and downs. 
                                Most couples get over their problems 
                                but sometimes professional help is required to 
                                deal with these problems.The most important thing 
                                to remember is you're not alone.</p>
                            </Row>
                            <Row>
                                <img src={relationshipImage} alt="Relationship-Issues"/>    
                            </Row>   
                            <Row>
                                <p>Warning Signs:</p>
                                <ul>
                                    <li>You have trouble communicating with your partner.</li>
                                    <li>You have troubling relating to each other.</li>
                                    <li>Dishonesty.</li>
                                    <li>Abusive behaviour.</li>
                                    <li>Selfishness</li>
                                    <li>If you can't compromise or find a middle ground.</li>
                                    <li>Regular arguments over even the most trivial things.</li>
                                    <li>Drug or alcohol abuse can seriously affect any relationship.</li>
                                    <li>Cultural differences.</li>
                                    <li>Extra marital affairs.</li>
                                </ul>
                            </Row>
                        </Modal.Body>
                    </Modal>

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Button onClick={handleTrauma} className='service-button'>TRAUMA</Button>
                    </Col>

                    <Modal show={trauma} onHide={closeTrauma} backdrop="static" keyboard={true}>

                        <Modal.Header closeButton>
                            <Modal.Title>Trauma</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <p>Experiencing a traumatic event like a car accident, hijacking or any other intense stressfull event 
                                may have severe psychological and/or physical effects that require 
                                professional help. Trauma may affect the minds attempt at dealing with 
                                a traumatic event.</p>
                            </Row>
                            <Row>
                                <img src={traumaImage} alt="Trauma"/>    
                            </Row>   
                            <Row>
                                <p>Warning Signs:</p>
                                <ul>
                                    <li>Experiencing feelings of sadness.</li>
                                    <li>Experiencing altered sleeping patterns.</li>
                                    <li>Having frequent emotional outbursts.</li>
                                    <li>Being in denial.</li>
                                    <li>Having trouble with existing and/or new relationships.</li>
                                    <li>Dizzines</li>
                                    <li>Having an overwhelming feeling of shame.</li>
                                    <li>Frequent nightmares.</li>
                                    <li>Being in a constant state of fear.</li>
                                    <li>Nausea</li>
                                </ul>
                            </Row>
                        </Modal.Body>
                    </Modal>

                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Button onClick={handleDepression} className='service-button'>DEPRESSION</Button>
                    </Col>

                    <Modal show={depression} onHide={closeDepression} backdrop="static" keyboard={true}>

                        <Modal.Header closeButton>
                            <Modal.Title>Depression</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <p>More than just a case of having the "blues" depression requires long-term treatment. 
                                It affects how you feel and may cause the feeling that life isn't worth living. 
                                The most important things to remember that depression is not a weakness. 
                                Depression can cause a variety physical and/or emotional problems that 
                                interfere with you day-to-day activities.</p>
                            </Row>
                            <Row>
                                <img src={depressionImage} alt="Depression"/>    
                            </Row>   
                            <Row>
                                <p>Warning Signs:</p>
                                <ul>
                                    <li>Altered appetite(increase or decrease in food cravings).</li>
                                    <li>Tiredness or lack of energy.</li>
                                    <li>Irritability and/or feeling frustrated over trivial matters.</li>
                                    <li>Altered sleeping patterns(insomnia or sleeping more).</li>
                                    <li>Feeling restless</li>
                                    <li>Having trouble remembering things or making decisions.</li>
                                    <li>Feeling worthless or constantly focusing on past mistakes.</li>
                                    <li>Unexplained physical symptoms such as back pain or headaches.</li>
                                    <li>Having suicidal feelings(feeling life isn't worth living).</li>
                                    <li>Loss of interest in activities you've previously enjoyed.</li>
                                </ul>
                            </Row>
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>
        </section>
    )
}
