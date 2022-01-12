import { Iconic, Form, ContactInfo } from './Components';

import React from 'react';
import './ContactMethods.css';

const ContactMethods = () => {
    return (
        <div className="contactMethods">
            <div className="contactMethodsContainer">
                <Iconic />
                <Form />
                <ContactInfo />
            </div>
        </div>
    )
}

export default ContactMethods
