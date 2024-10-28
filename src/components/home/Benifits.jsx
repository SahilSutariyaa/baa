import React from 'react'
import style from '../../style/components/Home/benifits.module.css'

const Benifits = () => {
    const healthBenefitsData = [
        {
            title: 'Comprehensive Health Insurance',
            description: 'Coverage for medical expenses, including doctor visits, hospital stays, and prescriptions.',
        },
        {
            title: 'Mental Health Support',
            description: 'Access to counseling services and mental health resources for overall well-being.',
        },
        {
            title: 'Wellness Programs',
            description: 'Programs that promote healthy lifestyle choices, including fitness challenges and nutrition workshops.',
        },
        {
            title: 'Gym Membership Discounts',
            description: 'Reduced rates for local gym memberships to encourage regular exercise.',
        },
        {
            title: 'Health Screenings',
            description: 'Annual health assessments to help employees monitor their health status.',
        },
    ];
    return (
        <>
            <div>

                <div className={ style.benefitsContainer }>
                    <h1>Health & Wellness Benefits</h1>
                    <ul className={ style.benefitsList }>
                        { healthBenefitsData.map((benefit, index) => (
                            <li key={ index } className={ style.benefitsList }>
                                <h2>{ benefit.title }</h2>
                                <p>{ benefit.description }</p>
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Benifits



