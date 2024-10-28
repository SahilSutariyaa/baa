import React from 'react'
import Slider from 'react-slick';
import style from '../../style/components/Home/sliderGallary.module.css'


const SliderGallary = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }

            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }

        ]
    };
    return (
        <>
            <div className={ style.sliderGallary }>
                <div className={ style.container }>
                    <h2>Best Selling Products</h2>
                    <h5>your Handpicked Selection of best selling product</h5>
                </div>
                <div className={ style.sliderContainer }>
                    <Slider { ...settings }>


                        <div className={ style.mainContainerImg }>
                            <div className={ style.imgContainer }>
                                <img src="https://ruchiveda.com/cdn/shop/files/ashwagandhachocolatepowder_ruchiveda_hotcocoapowder.webp?v=1714648744" alt="" />
                            </div>
                            <h3>Chocolate Powder</h3>
                            <p>Rs. 250</p>
                            <div className={ style.imgContainerHover }>
                                <img src="https://ruchiveda.com/cdn/shop/files/benefitsofashwagandhachocolatepowder_ruchiveda_chocolatedrinkmix_1120x.webp?v=1714648744" alt="" />
                               
                            </div>
                        </div>
                        <div className={ style.mainContainerImg }>
                            <div className={ style.imgContainer }>
                                <img src="https://ruchiveda.com/cdn/shop/files/benefitsofmoringadrumstickpowder_ruchiveda_drumstickrecipes.webp?v=1714645766" alt="" />
                            </div>
                            <h3>Moringa Drumstick Powder</h3>
                            <p>Rs. 250</p>
                            <div className={ style.imgContainerHover }>
                                <img src="https://ruchiveda.com/cdn/shop/files/howtousemoringadrumstickpowder_ruchiveda_moringadrumstickcurry_1120x.webp?v=1714645767" alt="" />
                              

                            </div>
                        </div>
                        <div className={ style.mainContainerImg }>
                            <div className={ style.imgContainer }>
                                <img src="https://ruchiveda.com/cdn/shop/files/benefitsofSugargurupowder_ruchiveda_diabetesmanagement.webp?v=1714652613" alt="" />
                            </div>
                            <h3>Sugar Guru Powder</h3>
                            <p>Rs. 250</p>
                            <div className={ style.imgContainerHover }>
                                <img src="https://ruchiveda.com/cdn/shop/files/diabetesdiet_ruchiveda_india_1120x.webp?v=1714652612" alt="" />
                              
                            </div>
                        </div>

                        <div className={ style.mainContainerImg }>
                            <div className={ style.imgContainer }>
                                <img src="https://ruchiveda.com/cdn/shop/files/weightlossdrink_ruchiveda.png?v=1704433879" alt="" />
                            </div>
                            <h3>Weight Loss Drink</h3>
                            <p>Rs. 250</p>
                            <div className={ style.imgContainerHover }>
                                <img src="https://ruchiveda.com/cdn/shop/files/weightlossdietplan_ruchiveda_1120x.png?v=1704433899" alt="" />
                               
                            </div>
                        </div>
                        <div className={ style.mainContainerImg }>
                            <div className={ style.imgContainer }>
                                <img src="https://ruchiveda.com/cdn/shop/files/weightlosspowder_ruchiveda_weightlossdiet.webp?v=1714646925" alt="" />
                            </div>
                            <h3>Weight Loss Powder</h3>
                            <p>Rs. 250</p>
                            <div className={ style.imgContainerHover }>
                                <img src="https://ruchiveda.com/cdn/shop/files/weightlossdietplan_ruchiveda_1120x.png?v=1704433899" alt="" />
                             
                            </div>
                        </div>

                        <div className={ style.mainContainerImg }>
                            <div className={ style.imgContainer }>
                                <img src="https://ruchiveda.com/cdn/shop/files/benefitsofwheatgrasspowder_ruchiveda_organicwheatgrasspowder.webp?v=1714650149" alt="" />
                            </div>
                            <h3>Wheat Grass Powder</h3>
                            <p>Rs. 250</p>
                            <div className={ style.imgContainerHover }>
                                <img src="https://ruchiveda.com/cdn/shop/files/howtousewheatgrasspowder_ruchiveda_wheatgrasspowderprice_1120x.webp?v=1714650151" alt="" />
                              
                            </div>
                        </div>
                        <div className={ style.mainContainerImg }>
                            <div className={ style.imgContainer }>
                                <img src="https://ruchiveda.com/cdn/shop/files/honeymainmockup.png?v=1715408831" alt="" />
                            </div>
                            <h3>Premium Honey</h3>
                            <p>Rs. 250</p>
                            <div className={ style.imgContainerHover }>
                                <img src="https://ruchiveda.com/cdn/shop/files/benefitsofhoney_ruchiveda_organichoney_296x.webp?v=1715408831" alt="" />
                             
                            </div>
                        </div>
                        <div className={ style.mainContainerImg }>
                            <div className={ style.imgContainer }>
                                <img src="https://ruchiveda.com/cdn/shop/files/herbal-mintgreentea_ruchiveda_bestgreenteabrands.webp?v=1714650570" alt="" />
                            </div>
                            <h3>Herbal Mint Green Tea</h3>
                            <p>Rs. 250</p>
                            <div className={ style.imgContainerHover }>
                                <img src="https://ruchiveda.com/cdn/shop/files/benefitsofherbal-mintgreentea_ruchiveda_greenteaforweightloss_1120x.webp?v=1714650570" alt="" />
                             
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>

        </>
    )
}

export default SliderGallary
