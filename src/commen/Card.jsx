import React from 'react';
import style from '../style/commen/card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearCart, removeCart } from '../redux/slice/card';
import { useNavigate } from 'react-router-dom';
// import { addWishList } from '../redux/slice/wishList';


const Card = () => {
  const cardData = useSelector((store) => store.card.cart) || [];

  const navi = useNavigate()
  const dispatch = useDispatch()

  const removeCartData = (itemId) => {
    dispatch(removeCart(itemId));
    toast.warn('🦄 Item removed from Cart');
  }
  const clearCartData = () => {
    dispatch(clearCart());
    toast.info('Cart has been cleared!');
  }
  const paymentDetails = () => {
    navi('/paymentDetails')
  }
  let totalPrice = cardData.map((value) => {
    return value.price * value.quantity;
  })


  const total = totalPrice.reduce((acc, value) => {
    return acc + value
  }, 0)

  return (
    <div className={ style.list }>
      <h1>Card List</h1>
      { cardData.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cardData.map((ele) => {

          return (
            <div className={ style.mainContainer } key={ ele.id }>
              <div className={ style.photoContainer }>
                <img src={ ele.img1 } alt="" />
              </div>
              <div className={ style.textContainer }>
                <div className={ style.innerContainer }>
                  <div>
                    <h3 className={ style.title }>{ ele.des }</h3>
                  </div>
                  <div>
                    <h3>₹{ Number(ele.price) * ele.quantity }</h3>
                    <br />
                    <h5>MRP incl. of all taxes</h5>
                  </div>
                </div>
                <br />
                <div className={ style.size }>
                  <p>Size: 100gm</p>
                  <br />
                  <p>Qty: { ele.quantity }</p>
                </div>
                <div className={ style.btn }>
                  <button onClick={ () => removeCartData(ele.id) }>Remove</button>

                </div>
              </div>
            </div>
          )
        })
      ) }
      {
        cardData.length > 0 &&
        <div className={ style.payment }>
          <div className={ style.clear } onClick={ clearCartData }>
            <button>Clear Cart</button>
          </div>
          <div className={ style.clear } onClick={ paymentDetails }><button> Payable Amount :- <b>{ total }</b></button></div>
        </div>
      }
    </div>
  );
};

export default Card;
