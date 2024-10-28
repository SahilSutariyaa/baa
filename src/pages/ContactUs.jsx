// ContactUs.js
import React, { useState } from 'react';
import styles from '../style/components/contact/contact.module.css';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { LuMapPin } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

      



        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setIsLoading(true);
        setSuccessMessage('');

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
        setSuccessMessage('Your message has been sent successfully!');
    };
    const data = [
        {
            icon: <LuMapPin />,
            title: "Location",
            desc: "33, Gokuldham, andada, anklesvar, gujarat, india 393010",
        },
        {
            icon: <MdOutlineLocalPhone />,
            title: "Phone",
            desc: "+91 33 24549650",
        },
        {
            icon: <CiMail />,
            title: "Email",
            desc: "info@alterx.in",
        },
    ];


    return (
        <div className={ styles.container }>
            <h2>Contact Us</h2>
            <div className={ styles.containerSecond }>
                { data.map((value, index) => {
                    return (
                        <div key={ index } className={ styles.inner }>
                            { value.icon }
                            <h4>{ value.title }</h4>
                            <p> { value.desc }</p>
                        </div>
                    );
                }) }
            </div>
            <form onSubmit={ handleSubmit } className={ styles.form }>
                <input
                    type="text"
                    name="name"
                    value={ formData.name }
                    onChange={ handleChange }
                    placeholder="Your Name"
                    className={ `${styles.input} ${errors.name ? styles.errorInput : ''}` }
                />
                { errors.name && <span className={ styles.error }>{ errors.name }</span> }

                <input
                    type="email"
                    name="email"
                    value={ formData.email }
                    onChange={ handleChange }
                    placeholder="Your Email"
                    className={ `${styles.input} ${errors.email ? styles.errorInput : ''}` }
                />
                { errors.email && <span className={ styles.error }>{ errors.email }</span> }

                <textarea
                    name="message"
                    value={ formData.message }
                    onChange={ handleChange }
                    placeholder="Your Message"
                    className={ `${styles.textarea} ${errors.message ? styles.errorInput : ''}` }
                />
                { errors.message && <span className={ styles.error }>{ errors.message }</span> }

                <button type="submit" className={ styles.button } disabled={ isLoading }>
                    { isLoading ? 'Sending...' : 'Send Message' }
                </button>
            </form>
           { successMessage && <div className={ styles.success }>{ successMessage }</div> }
        </div>
    );
};

export default ContactUs;
