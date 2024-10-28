/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from 'react'
import style from '../style/layout/Navbar.module.css'
import { CiHeart } from "react-icons/ci";
import { AiOutlineBars } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import logo from '../images/Sahil Sutariya Logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const wishList = useSelector((state) => state.list.wishList)
    // console.log('wishList::: ', wishList);
    const card = useSelector((store) => store.card.cart)

    const navi = useNavigate()
    const handleShowMenu = () => {
        setIsVisible(!isVisible);
    }

    const closeMenu = () => {
        setIsVisible(false)
    }
    const addToWishList = () => {
        navi('/wishList')
    }
    const addToCard = () => {
        navi('/card')
    }
    return (
        <>
            <div className={ style.navbarContainer }>
                <marquee height="25px" width="100%" direction="left" className={ style.marquetry }>
                    <ul style={ { display: "flex", alignItems: "center", gap: "30px" } }>
                        <li>
                            <strong>Your Trust Is Our Pride</strong>
                        </li>
                        <li>
                            <strong>
                                If You Like Tell Every Buddy , If You Don't Like Tell Us
                            </strong>
                        </li>
                        <li>
                            <strong>Cash on Delivery and Prepaid Both Available for Your Valuable Trust</strong>
                        </li>
                        <li>

                            <strong>4.8/5 🌟 Rating and Reviews, Trusted by Over 21,500+ People </strong>
                        </li>
                        <li>
                            <strong>Free Shipping Across India ,</strong>
                            <strong>Enjoy hassle-free shopping with no extra cost on delivery.</strong>
                        </li>
                    </ul>
                </marquee>
                <div className={ style.mainContainer }>
                    <div className={ style.logo }>
                        <Link style={ { textDecoration: "none" } } to={ '/' }>
                            <img src={ logo } alt="" />
                        </Link>
                    </div>

                    <ul className={ `${style.ulItems} ${isVisible ? style.visible : ""}` }>
                        <div className={ style.list } onClick={ closeMenu }>
                            <Link style={ { textDecoration: "none" } } to={ '/' }>
                                <li>Home</li>
                            </Link>
                        </div>
                        <div className="" onClick={ closeMenu }>

                            <Link style={ { textDecoration: "none" } } to={ '/shope' }>
                                <li>Shop</li>
                            </Link>
                        </div>
                        <div className="" onClick={ closeMenu }>
                            <Link style={ { textDecoration: "none" } } to={ '/aboutUs' }>
                                <li>About Us</li>
                            </Link>
                        </div>
                        <div className="" onClick={ closeMenu }>
                            <Link style={ { textDecoration: "none" } } to={ '/certificate' }>
                                <li>Certificate</li>
                            </Link>
                        </div>

                        <div className="" onClick={ closeMenu }>
                            <Link style={ { textDecoration: "none" } } to={ '/contactUs' }>
                                <li>Contact Us</li>
                            </Link>
                        </div>
                    </ul>

                    <div className={ style.iconContainer }>
                        {/* { wishList.length > 0 && <b className={ style.num }>{ wishList.length }</b> }/' */ }
                        { wishList.length > 0 && <b className={ style.number }>{ wishList.length }</b> }
                        <CiHeart onClick={ addToWishList } />

                        { card.length > 0 && <b className={ style.number }>{ card.length }</b> }
                        <FaCartShopping onClick={ addToCard } />
                    </div>
                    <div className={ style.menuBar } onClick={ handleShowMenu }>
                        { isVisible ? (
                            <FaXmark />
                        ) : (
                            <AiOutlineBars />
                        ) }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
