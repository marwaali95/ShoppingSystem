import React from 'react';
const Cart = (props) => {
    const mystyle = !props.product.isInCart
    ? {color:'#80808080' , cursor: 'pointer'}
    : {cursor:'pointer'}
    return (< i 
        style={mystyle}
        onClick={()=>props.onClick(props.product)} 
        className="fas fa-shopping-cart"></i> );
}
 
export default Cart;