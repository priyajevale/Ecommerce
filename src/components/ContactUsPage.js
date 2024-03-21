import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would perform the POST request to Firebase to store the data
        console.log(formData); // For demonstration, logging the form data
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactUs;