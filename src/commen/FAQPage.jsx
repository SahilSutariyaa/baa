import React, { useState } from 'react';
import styles from '../style/commen/FAQ.module.css';
import ContactModal from './ContactModal';

const detailsData = [
    {
        question: "What makes Ruchi Veda products unique?",
        answer: "Our products are crafted using ancient Ayurvedic wisdom and 100% natural plant-based ingredients. We prioritize quality, sustainability, and customer satisfaction to bring you the best of nature."
    },
    {
        question: "Are your products safe to use?",
        answer: "Yes, all our products are safe and free from harmful chemicals. They are made with natural ingredients and undergo rigorous testing to ensure purity and effectiveness."
    },
    {
        question: "How do I choose the right product for my needs?",
        answer: "Our website provides detailed descriptions of each product and its benefits. If you need personalized advice, feel free to contact our customer support team for recommendations based on your specific needs."
    },
    {
        question: "Can I use Ruchi Veda products daily?",
        answer: "Absolutely! Our products are designed for daily use and are gentle on the skin and body. Regular use can help you achieve optimal health and wellness."
    },
    {
        question: "Are your products eco-friendly?",
        answer: "Yes, Ruchi Veda is committed to environmental sustainability. Our products are cruelty-free, biodegradable, and packaged in eco-friendly materials."
    }
    ,
    {
        question: "How do I place an order?",
        answer: "Ordering is easy! Simply browse our website, add your chosen products to the cart, and proceed to checkout. We offer secure payment options and quick delivery."
    }
    ,
    {
        question: " What if I am not satisfied with the product?",
        answer: "Your satisfaction is our priority. If you are not completely satisfied with your purchase, please contact our customer service within 30 days for a hassle-free return or exchange."
    }
    ,
    {
        question: " Do you offer international shipping?",
        answer: "Yes, we ship our products worldwide. Shipping costs and delivery times may vary based on your location. Check our shipping policy for more details."
    }
    ,
    {
        question: " How can I stay updated on new products and offers??",
        answer: "Join our newsletter and follow us on social media to stay informed about the latest products, special offers, and Ayurvedic health tips."
    }
    ,
    {
        question: " Where can I find more information about Ayurveda?",
        answer: "Visit our blog section for informative articles on Ayurveda, wellness tips, and more. We aim to educate and inspire our customers on their journey to better health.."
    }
];



const FAQPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDetails = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <div className={ styles.faqContainer }>
            <h1 className={ styles.title }>Frequently Asked Questions (FAQs) About Ruchi Veda Ayurvedic Plant-Based Products</h1>
            <p className={ styles.intro }>Welcome to Ruchi Veda's FAQ section! Here, we address some common questions to help you understand and make the most of our Ayurvedic plant-based products.</p>

            <div className={styles.container}>
                { detailsData.map((detail, index) => (
                    <div key={ index } className={ styles.details }>
                        <div
                            className={ styles.detailsContainer }
                            onClick={ () => toggleDetails(index) }
                            open={ openIndex === index }
                        >
                            <h2 className={ styles.detailsTitle }>{ detail.question }</h2>
                        </div>
                        <div className={ `${styles.detailsDesc} ${openIndex === index ? styles.open : ''}` }>
                            <div className={ styles.detailsDescInner }>
                                { detail.answer }
                            </div>
                        </div>
                    </div>
                )) }
            </div>
            <hr />
            <p className={ styles.outro }>
                Explore the natural path to wellness with Ruchi Veda. If you have more questions, don't hesitate to reach out to our friendly customer support team!
            </p>
            <div className={ styles.ctaSection }>
                <h2>WE'RE HERE TO HELP YOU!</h2>
                <button className={ styles.ctaButton } onClick={ handleOpenModal }>Contact Us Now</button>
            </div>
            <ContactModal isOpen={ isModalOpen } onClose={ handleCloseModal } />
        </div>
    );
};

export default FAQPage;