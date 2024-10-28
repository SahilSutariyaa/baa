import React from 'react'
import style from '../../style/components/Home/textWithImage.module.css'
import { Link } from 'react-router-dom'

const TextWithImage = () => {
    const scroll=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
    return (
        <>
            <div className={ style.mainContainer }>
                <div className={ style.imageContainer }>
                    <img src="https://ruchiveda.com/cdn/shop/files/why_chosse_ruchi_veda_powder_768x.png?v=1715187193" alt="" />
                </div>
                <div className={ style.textContainer }>
                    <h1>
                        We craft our premium plant-based powders and tablets with care in the heart of Amreli, Gujarat, Bharat.
                    </h1>
                    <h2>Proudly made from Bharat farmers.</h2>
                    <p>
                        The climate of Amreli district is considered to be the world's best environment. Our production facility benefits from the natural purity of the surroundings. The environment is very pure, which enriches everything with nutrition, resulting in high-quality products.
                    </p>
                    <p>
                        <b>Our mission is clear</b> : to provide you with pure, high-quality products that promote health and wellness. We source our ingredients locally, supporting farmers and sustainability. Join us on the path to a healthier tomorrow with Ruchi Veda!"
                    </p>
                    <div className={ style.btnContainer }>
                        <Link style={ { textDecoration: "none" } } to={ '/aboutUs' } onClick={scroll}>

                            <button className={ style.btn1 }>About Us</button>
                        </Link>

                        <Link style={ { textDecoration: "none" } } to={ '/shope' } onClick={scroll}>
                            <button className={ style.btn2 }>Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextWithImage 
