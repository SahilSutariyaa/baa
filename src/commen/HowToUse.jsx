import React from 'react'
import styles from '../style/commen/howToUse.module.css'
import { FaStar } from 'react-icons/fa6'
import { GiLindenLeaf, GiMoneyStack } from 'react-icons/gi'

const HowToUse = () => {
  return (
    <>
      <div className={ styles.container }>
        <h2 className={ styles.title }>Why Choose Us?</h2>
        <ul className={ styles.featureList }>
          <li className={ styles.featureItem }>
            <FaStar className={ styles.icon } />
            <span>Premium Ayurvedic Ingredients</span>
          </li>
          <li className={ styles.featureItem }>
            <GiLindenLeaf className={ styles.icon } />
            <span>Plant-based Solution</span>
          </li>
          <li className={ styles.featureItem }>
            <GiMoneyStack className={ styles.icon } />
            <span>Cash-on-Delivery Option: Trust and convenience for you!</span>
          </li>
        </ul>
        <p className={ styles.joinUs }>
          Join us at Ruchi Veda for a healthier, happier you! Place your order with peace of mind, delivered right to your doorstep. <span className={ styles.emoji }>🌿 ☀️</span>
        </p>
      </div>
    </>
  )
}

export default HowToUse


