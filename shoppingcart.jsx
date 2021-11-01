import React from 'react';
import Product from './product';
class ShoppingCart extends React.Component {
    constructor(props){
        super(props);
    //  console.log("Shopping Cart ===> constructor")
    }
    render() { 
        const {products, onReset,onIncrement,onDelete} = this.props;
        console.log(this.props)

        return (
        <React.Fragment>
            <h1>
                Shopping Cart
            </h1>
            <button className="btn btn-secondary btn-sm m-2" onClick={onReset} >Reset</button>
            {products.map(product=>(
            <Product key={product.id} onIncrement={onIncrement} onDelete={onDelete} myproduct={product} />))}
        </React.Fragment>
            );    }
}
 
export default ShoppingCart;