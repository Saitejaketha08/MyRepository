import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from './store';


function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item));
    } else {
      handleRemove(item);
    }
  };

  const totalBeforeDiscount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = (totalBeforeDiscount * discount) / 100;
  const finalAmount = totalBeforeDiscount - discountAmount;

  const applyCoupon = () => {
    if (couponCode === 'TEJA10') {
      setDiscount(10);
      setAppliedCoupon('10% discount applied!');
    } else if (couponCode === 'TEJA20') {
      setDiscount(20);
      setAppliedCoupon('20% discount applied!');
    } else if (couponCode === 'TEJA30') {
      setDiscount(30);
      setAppliedCoupon('30% discount applied!');
    } else {
      setAppliedCoupon('Invalid coupon code');
    }
  };

  return (
    <>
      <h2  style={{color:'blue'}}> Cart Page</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ol>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)} (Quantity: {item.quantity})
                <button onClick={() => handleIncrement(item)}> + </button>
                <button onClick={() => handleDecrement(item)}> - </button>
                <button onClick={() => handleRemove(item)}> Remove </button>
              </li>
            ))}
          </ol>
          <p>Total before discounts: ${totalBeforeDiscount.toFixed(2)}</p>
          <div>
            <button style={{color:'gold'}} onClick={() => setDiscount(10)}>Apply 10% Discount</button>
            <button  style={{color:'green'}} onClick={() => setDiscount(20)}>Apply 20% Discount</button>
            <button  style={{color:'purple'}} onClick={() => setDiscount(30)}>Apply 30% Discount</button>
          </div>
          <h2  style={{color:'orange'}}>Discount Percentage Applied: {discount}%</h2>
          <h2  style={{color:'purple'}}>Discount Amount: ${discountAmount.toFixed(2)}</h2>
          <h3  style={{color:'blue'}}>Final Amount after Discount: ${finalAmount.toFixed(2)}</h3>

          <div>
            <input type="text" placeholder="Enter Coupon Code" value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button  style={{color:'red'}} onClick={applyCoupon}>Apply Coupon</button>
          </div>
          <p>{appliedCoupon}</p>
        </>
      )}
    </>
  );
}

export default Cart;