import React from 'react'
import InfoRow from './InfoRow'
import style from '../../style/components/Home/infoData.module.css'

const InfoData = () => {

    const dataFirst = [
        {
            "title": 'joint pain relief',
            "dec": "anti-inflammatory properties that alleviate joint pain. Its rich nutrients, like vitamins A and C, promote joint health.",
            "img": 'https://ruchiveda.com/cdn/shop/files/dsd_de98c81b-e2b2-4344-a663-8a98f87b73a5.png?v=1715262444&'
        },
        {
            "title": 'weight management',
            "dec": "weight loss by boosting metabolism and reducing cravings. Its nutrient density supports overall health and fitness.",
            "img": 'https://ruchiveda.com/cdn/shop/files/6_0ef473e3-b435-4ae2-a641-749944d07598.png?v=1715263136'
        },
        {
            "title": 'Sleep aid',
            "dec": "It is known for its potential as a sleep. It an help promote relaxation, in a sense of calmness, improve sleep quality.",
            "img": 'https://ruchiveda.com/cdn/shop/files/sleep.png?v=1715263311&width=62'
        }
    ]
    const dataSecond = [
        {
            "title": 'Relief from...',
            "dec": "Find relief from constipation with Moringa, which aids digestion and..",
            "img": 'https://ruchiveda.com/cdn/shop/files/constipation_067f105f-c64b-4bbd-a13c-604e0e9f214e.png?v=1715264408&width=78'
        },
        {
            "title": 'Diabetes controller',
            "dec": "Help to manage diabetes by regulating blood sugar levels naturally, owing to .",
            "img": 'https://ruchiveda.com/cdn/shop/files/dibetes.png?v=1715264893&width=78'
        },
        {
            "title": 'Sleep aid',
            "dec": "It is known for its potential as a sleep. It an help promote relaxation, in a sense of calmness, improve sleep quality.",
            "img": "https://ruchiveda.com/cdn/shop/files/skin_and_hair.png?v=1715265209&width=78"
        }
    ]
    return (
        <>
            <h1 className={ style.use }>Uses of moringa drumstick Powder</h1>
            <div className={ style.mainContainer }>
                <div className={ style.firstContainer }>
                    {
                        dataFirst.map((ele, index) => {
                            return (
                                <InfoRow
                                    key={ index }
                                    title={ ele.title }
                                    description={ ele.dec }
                                    img={ ele.img }
                                    side="right"
                                />

                            )

                        })
                    }
                </div>
                <div className={ style.secondContainer }>
                    <img src="https://ruchiveda.com/cdn/shop/files/moringa_drumstick_teblet.png?v=1715263859&width=1780" alt="" />
                </div>
                <div className={ style.thirdContainer }>
                    {
                        dataSecond.map((ele, index) => {
                            return (
                                <InfoRow
                                    key={ index }
                                    title={ ele.title }
                                    description={ ele.dec }
                                    img={ ele.img }
                                />

                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default InfoData



