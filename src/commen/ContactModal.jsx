import React, { useState } from 'react';
import styles from '../style/commen/ContactModal.module.css';

const ContactModal = ({ isOpen, onClose }) => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')
    
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = [{
            name: name,
            email: email,
            message: message,
            number: number
        }]
        console.log('data::: ', data);
        setName('')
        setEmail('')
        setMessage('')
        setNumber('')
    };

    return (
        <div className={ styles.formContainer }>
            <button className={ styles.closeButton } onClick={ onClose }>×</button>
            <h2 className={ styles.formTitle }>CONTACT US NOW</h2>
            <p className={ styles.formDescription }>
                Please enter the details of your request. A member of our support staff will
                respond as soon as possible.
            </p>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                    className={ styles.formInput }
                />
                <input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    className={ styles.formInput }
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="PHONE NUMBER"
                    value={ number }
                    onChange={ (e) => setNumber(e.target.value) }
                    className={ styles.formInput }
                />
                <textarea
                    name="message"
                    placeholder="YOUR MESSAGE"
                    value={ message }
                    onChange={ (e) => setMessage(e.target.value) }
                    className={ styles.formTextarea }
                />
                <button type="submit" className={ styles.submitButton }>
                    Submit Now
                </button>
            </form>
        </div>
    );
};

export default ContactModal;