import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Slider from "react-slick";
import { toast } from 'react-toastify';
import { data } from '../data';
import { addCart } from '../redux/slice/card';
import style from '../style/commen/detailPage.module.css';
import HowToUse from './HowToUse';
import IconWithImage from './IconWithImage';
import { HiAnnotation } from 'react-icons/hi';


const DetailsPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [display, setDisplay] = useState(null);
    const dispatch = useDispatch();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={ { backgroundColor: "#ddd", borderRadius: "10px", padding: "10px" } }>
                <ul style={ { margin: "0px" } }>{ dots }</ul>
            </div>
        ),
        customPaging: i => (
            <div style={ { color: "blue" } }>
                { i + 1 }
            </div>
        )
    };

    const { id } = useParams();

    useEffect(() => {
        const item = data.find(ele => parseInt(ele.id) === parseInt(id));
        setDisplay(item || null);
    }, [id]);


    const addToCardList = () => {
        if (display) {
            const qty = parseInt(quantity);
            dispatch(addCart({ ...display, quantity: qty }));
            toast.success('Item added to Cart!');
        }
    };

    if (!display) {
        return <div>Loading...</div>;
    }
    const handleClick = () => {
        const phoneNumber = '918401143813'; // Replace with the actual phone number
        const message = `i want to know about ${display.des}`; // Customize your message
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    };
    return (
        <div>
            <div className={ style.mainContainer }>
                <div className={ style.imgContainer }>
                    <Slider { ...settings }>
                        <img src={ display.img1 } alt="" />
                        <img src={ display.img2 } alt="" />
                    </Slider>
                </div>
                <div className={ style.detailsContainer }>
                    <h3>{ display.des }</h3>
                    <b>₹{ display.price }</b>
                    <br /><br />
                    <b>Size: 100g</b>
                    <br /><br />
                    <label>Quantity:</label>
                    <input
                        type="number"
                        min="1"
                        max={ 5 }
                        placeholder='Please Select Quantity'
                        value={ quantity }
                        onChange={ (e) => setQuantity(e.target.value) }
                        required
                    />
                    <br /><br />
                    <button className={ style.btn } onClick={ addToCardList }>🛒 Add to Cart</button>
                    <br /><br />
                    <button className={ style.btn1 }>Buy It Now</button>
                    <br /><br />
                    <button className={ style.btn1 } onClick={ handleClick }>Wp</button>
                    <div className={ style.faq }>
                        <Link to={ '/faq' } style={ { textDecoration: "none", color: "grey" } }>
                            <HiAnnotation className={ style.faq1 } />
                            <b>FAQS</b>
                        </Link>
                    </div>

                </div>
            </div>
            <div className={ style.description }>
                <h1>Description</h1>
                <p>{ display.info }</p>
            </div>
            <div className={ style.description }>
                <h1>Benefits</h1>
                { display.info2 && display.info2.map((item, idx) => (
                    <div className={ style.listContainer } key={ idx }>
                        <span>{ item.icon }</span>
                        <span><b>{ item.title }:</b><p>{ item.dis }</p></span>
                    </div>
                )) }
            </div>
            <div className={ style.description }>
                <h1>How to Use:</h1>
                { display.use.map((usage, idx) => (
                    <div key={ idx }>
                        <p>{ usage.note1 }</p>
                        <p>Note: { usage.note2 }</p>
                    </div>
                )) }
            </div>
            <div className={ style.description }>
                <h1>Ingredients:</h1>
                <p>{ display.Ingredients[0].Ingredients1 }</p>
                <p>{ display.Ingredients[0].Ingredients2 }</p>
            </div>
            <HowToUse />
            <IconWithImage />
        </div>
    );
}

export default DetailsPage;
