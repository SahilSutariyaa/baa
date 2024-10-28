import React from 'react';
import styles from '../style/components/shop/aboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={ styles.container }>
            <h1 className={ styles.title }>About Us</h1>
            <h2 className={ styles.missionTitle }>Who We Are</h2>
            <p className={ styles.description }>
                Welcome to [Your Company Name]! We are dedicated to providing the best
                [product/service] to our customers. Our journey began in [Year] with a
                passion for [what inspired you], and we have grown to become a leader
                in the industry.
            </p>
            <div className={ styles.mission }>
                <h2 className={ styles.missionTitle }>Our Mission</h2>
                <p>
                    To [insert mission statement here], ensuring quality and satisfaction
                    in every interaction.
                </p>
            </div>
            <div className={ styles.team }>
                <h2 className={ styles.teamTitle }>Meet the Team</h2>
                <p>
                    Our team consists of talented individuals who are experts in their
                    fields, dedicated to making your experience memorable.
                </p>
            </div>
            <div className={ styles.values }>
                <h2 className={ styles.valuesTitle }>Our Values</h2>
                <ul>
                    <li>Integrity</li>
                    <li>Innovation</li>
                    <li>Customer-Centric</li>
                    <li>Sustainability</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
