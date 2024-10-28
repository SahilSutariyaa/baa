import React from 'react'
import { GiReturnArrow } from 'react-icons/gi'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { SiMoneygram } from 'react-icons/si'
import style from '../style/commen/iconWithImage.module.css'

const IconWithImage = () => {
    const demo = [
        {
            icon: <LiaShippingFastSolid />,
            title: "Free Shipping",
            des: `Enjoy Free Shipping on Every Order—Shop Now and Save`,
        },
        {
            icon: <GiReturnArrow />,
            title: "Return Policy",
            des: `Shop with Confidence: Our Friendly Return Policy Guarantees Your Satisfaction Every Time!`,
        },
        {
            icon: <RiSecurePaymentLine />,
            title: "Payment Secured",
            des: `Shop Now with Confidence: Our Secure Payment Solutions Protect Every Transaction!`,
        }, {
            icon: <SiMoneygram />,
            title: "Money Back Guarantee",
            des: `Shop with Confidence: Our Money Back Guarantee Ensures You'll Love Every Purchase!`,
        }
    ]
  return (
    <>
        <div className={ style.secondContainer }>
                {
                    demo.map((ele, index) => (
                        <div className={ style.secondCard } key={ index }>
                            <div className={ style.secondCardIcon }>{ ele.icon }</div>
                            <b>{ ele.title }</b>
                            <p>{ ele.des }</p>
                        </div>
                    ))
                }

            </div>
    </>
  )
}

export default IconWithImage
