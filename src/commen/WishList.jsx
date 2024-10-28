import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishList } from '../redux/slice/wishList'
import { toast } from 'react-toastify'
import style from '../style/commen/wishList.module.css'
// import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { addCart } from '../redux/slice/card'

const WishList = () => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const navi = useNavigate()
    const WishList = useSelector((store) => store.list.wishList)
    // console.log('WishList::: ', WishList);


    const handleRemoveFromWishList = (id) => {
        dispatch(removeWishList(id))
        toast.warn('🦄 Item removed from Wishlist')
    }
    const addToDetails = (id) => {
        navi(`/details/${id}`)
    }
    const addToCardList = (item) => {
        const qty = parseInt(quantity);
        dispatch(addCart({ ...item, quantity: qty }))
        dispatch(removeWishList(item.id))
        toast.success('Item added to Cart and removed from Wishlist!');
        setQuantity(1)
    }
    return (
        <>
            <h1 className={ style.list }>My Wishlist</h1>
            <div className={ style.container }>
                { WishList.length > 0 ? (
                    WishList.map((ele) => (
                        <div key={ ele.id } className={ style.productCard }>
                            <div className={ style.productImageContainer }>

                                <img
                                    src={ ele.img1 }
                                    alt=""
                                    className={ style.productImageFirst }
                                />
                                <img
                                    src={ ele.img2 }
                                    alt=""
                                    className={ style.productImageSecond }
                                />
                            </div>
                            <hr />
                            <h4>{ ele.des }</h4>
                            <hr />
                            <p>₹{ ele.price } MRP incl. all taxes</p>
                            <FaHeart
                                onClick={ () => handleRemoveFromWishList(ele.id) }
                                className={ style.heartIcon }
                            />
                            <div>
                                <button className={ style.details } onClick={ () => addToDetails(ele.id) }>Details Page</button>
                                <button className={ style.detail } onClick={ () => { addToCardList(ele) } }>🛒 Add to Cart </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className={ style.list }>No Data found</h1>
                ) }
            </div>
        </>
    )
}

export default WishList
