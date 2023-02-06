import React from 'react';
import emailjs from 'emailjs-com';
import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const SERVICE_ID = "yolandebirdcounsellor";
const TEMPLATE_ID = "template_5t2q8jg";
const USER_ID = "KjRM0CF4SD1FNe0Ge";
const PUBLIC_KEY = 'KjRM0CF4SD1FNe0Ge';

export const Contact = () => {

    const [setForm] = useState('Submit');
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setForm('Submitting ...')
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Oops, something went wrong',
                text: error.text,
            })
        });
        e.target.reset()
    };

    return (
        <section className="banner container-fluid" id="contact">
            <Container>
                <br/>
                <br/>
                <Row>
                    <h1>Contact Me:</h1>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field
                                id='form-input-control-name'
                                control={Input}
                                name='name'
                                placeholder='Name...'
                                required    
                            />
                            <br/>
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                name='email'
                                placeholder='Email...'
                                required    
                            />
                            <br/>
                            <Form.Field
                                id='form-textarea-control-message'
                                control={TextArea}
                                name='message'
                                placeholder='Message...'
                                rows='10'
                                required    
                            />
                            <br/>
                            <Button type='submit'>Submit</Button> 
                        </Form>
                    </Col>
                </Row>
            </Container>

                
        </section>
    );
}