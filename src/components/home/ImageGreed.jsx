

import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../../style/components/Home/imageGreed.module.css';

import { BsArrowRight } from 'react-icons/bs';
const data = [
    {
        "id": "1",
        "img1": "https://ruchiveda.com/cdn/shop/files/benefitsofactivejointpowder_ruchiveda_jointpainremedies_1120x.webp?v=1714647223",
        "des": "Active Joint Powder - Essential Ayurvedic Solution for Healthy Joints & Strong Bones",
        "price": "357.00",

    },
    {
        "id": "2",
        "img1": "https://ruchiveda.com/cdn/shop/files/benefitsofSugargurupowder_ruchiveda_diabetesmanagement_768x.webp?v=1714652613",
        "img2": "https://ruchiveda.com/cdn/shop/files/diabetesdiet_ruchiveda_india_296x.webp?v=1714652612",
        "des": "Active Joint tablets - Essential Ayurvedic Solution for Healthy Joints & Strong Bones-120teb",
        "price": "699.00 "
    },
    {
        "id": "3",
        "img1": "https://ruchiveda.com/cdn/shop/files/ashwagandhachocolatepowder_ruchiveda_hotcocoapowder.webp?v=1714648744&width=1440",
        "img2": "https://ruchiveda.com/cdn/shop/files/ingredientsof…estdrinkingchocolatebrands_296x.webp?v=1714648758",
        "des": "Ashwagandha Hot and Cold Chocolate Powder Blend with Palm Mishri",
        "price": "349.00"
    },
    {
        "id": "4",
        "img1": "https://ruchiveda.com/cdn/shop/files/herbal-mintgreentea_ruchiveda_bestgreenteabrands.webp?v=1714650570&width=525",
        "img2": "https://ruchiveda.com/cdn/shop/files/benefitsofherbal-mintgreentea_ruchiveda_greenteaforweightloss_180x.webp?v=1714650570",
        "des": "Consti-Care Powder -  The Ultimate Ayurvedic Solution for Constipation Relief",
        "price": "359.00"
    },]



const ImageCard = ({ item, onClick }) => (
    <div className={ style.card } onClick={ onClick }>
        <div className={ style.cardInner }>
            <div className={ style.cardFront }>
                <img src={ item.img1 } alt={ item.des } className={ style.cardImage } />
                <div className={ style.cardTag }>{ item.des }</div>
            </div>
            <div className={ style.cardBack }>
                <h3 className={ style.cardTitle }>{ item.price }</h3>
                <div className={ style.cardIcon }>
                    <BsArrowRight size={ 24 } />
                </div>
            </div>
        </div>
    </div>
);

const ImageGrid = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        console.log('id:', id);
        navigate(`/details/${id}`);
    };

    return (
        <div className={ style.container }>
            <div className={ style.grid }>
                { data.map((item) => {
                    return <ImageCard key={ item.id } item={ item } onClick={ () => handleCardClick(item.id) } />
                }
                ) }
            </div>
        </div>
    );
};

export default ImageGrid;