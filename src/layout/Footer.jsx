import React from 'react';
import styles from '../style/layout/Footer.module.css'
import { LuMapPin } from 'react-icons/lu';
import { MdEmail, MdOutlineLocalPhone } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.container }>
        <div className={ styles.section }>
          <h3 className={ styles.sectionTitle }>Contact</h3>
          <p className={ styles.contactItem }>

            <LuMapPin className={ styles.icon } />
            117-118, Amby Valley Arcade, Ultran, opp. Sentosa, Mota Varachha, Surat, Gujarat 394105
          </p>
          <p className={ styles.contactItem }>

            <MdOutlineLocalPhone className={ styles.icon } />
            +91 9727147113 | +91 8320589660
          </p>
          <p className={ styles.contactItem }>
            <MdEmail className={ styles.icon } />
            ruchivedas@gmail.com
          </p>
          <div className={ styles.socialIcons }>
            <FaFacebookF size={ 24 } />
            <FaInstagram size={ 24 } />
            <FaYoutube size={ 24 } />
          </div>
        </div>

        <div className={ styles.section }>
          <h3 className={ styles.sectionTitle }>Customer Service</h3>
          <ul className={ styles.list }>
            <Link
              to={ '/policy' }
              style={ { textDecoration: "none", color: "white" } }
            >
              <li>Privacy Policy</li>
            </Link>
            <Link
              to={ '/terms' }
              style={ { textDecoration: "none", color: "white" } }
            >
              <li>Terms of Service</li>
            </Link>
            <Link
              to={ '/refund' }
              style={ { textDecoration: "none", color: "white" } }
            >
              <li>Refund Policy</li>
            </Link>
            <Link
              to={ '/shipping' }
              style={ { textDecoration: "none", color: "white" } }
            >
             <li>Shipping Policy</li>
            </Link>
            
            <li>Do not sell or share my personal information</li>
          </ul>
        </div>



        <div className={ styles.section }>
          <h3 className={ styles.sectionTitle }>Subscribe</h3>
          <p className={ styles.subscribeText }>
            Dear Customer's Welcome to the ruchi veda Sign up for Uses, Benefits of product, new launches and new offer all kinds of updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className={ styles.input }
          />
          <button className={ styles.button }>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;