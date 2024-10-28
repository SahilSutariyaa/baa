import React from 'react'
import style from '../../style/components/shop/third.module.css'
import { CiHeart } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { addWishList, removeWishList } from '../../redux/slice/wishList'
import { toast } from 'react-toastify'
import { FaHeart } from 'react-icons/fa6'
import IconWithImage from '../../commen/IconWithImage'
import { useNavigate } from 'react-router-dom'
import { data } from '../../data'


const ThirdLayer = () => {

    const navi = useNavigate()

    const isItemInWishlist = (id) => wishList.some(item => item.id === id);
    const dishPatch = useDispatch()

    const wishList = useSelector((state) => state.list.wishList)
    console.log('wishList::: ', wishList);
    const addToWishList = (id) => {
        dishPatch(addWishList(id))
        toast.success('🦄 Item added to Wishlist');

    }
    const removeFromWishList = (id) => {
        dishPatch(removeWishList(id));
        toast.info('🦄 Item removed from Wishlist');
    };
    const addToDetails = (id) => {
        navi(`/details/${id}`)

    }

    return (
        <>

            <div className={ style.container }>
                { data.map((ele, index) => (
                    <div className={ style.productCard } key={ index }>
                        <div className={ style.productImageContainer }>
                            <img className={ style.productImageFirst } src={ ele.img1 } alt="product-image" />
                            <img className={ style.productImageSecond } src={ ele.img2 } alt="product-image" />

                            { isItemInWishlist(ele.id) ? (
                                <FaHeart
                                    className={ `${style.heartIcon} ${style.filledHeart}` }
                                    onClick={ () => removeFromWishList(ele.id) }
                                />
                            ) : (
                                <CiHeart
                                    className={ style.heartIcon }
                                    onClick={ () => addToWishList(ele) }
                                />
                            ) }
                        </div>
                        <h4>{ ele.des }</h4>
                        <p>₹{ ele.price }</p>
                        <button className={ style.details } onClick={ () => addToDetails(ele.id) }>Details Page</button>
                    </div>
                ))
                }
            </div>

            <IconWithImage />

        </>
    )
}

export default ThirdLayer
