/*jshint esversion:9*/
import React from 'react';
import './checkout-item-styles.scss';
import {connect} from 'react-redux';
import {clearItemFromCart,removeItemFromCart,addItem} from '../../redux/cart/cart-actions';

const CheckoutItem = ({cartItem, clearItem, removeItem, additem}) =>
  {
    const {imageUrl,name,price,quantity} = cartItem;
  return(<div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item'/>
    </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
      <div className='arrow' onClick={()=>{removeItem(cartItem)}}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={()=>{additem(cartItem)}}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</div>
  </div>);
}

const mapDispatchToProps = dispatch =>({
  clearItem: item=>dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item)),
  additem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
