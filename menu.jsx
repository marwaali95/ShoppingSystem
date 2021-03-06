import React from 'react';
import Cart from './cart';
//Step1. Create the component which will act as Apage
class Menu extends React.Component {
  constructor(props){
    super(props);
}
    render() { 
      return(<React.Fragment>
          <h1>Menu</h1>
           <table className="table">
  <thead>
      <th>Name</th>
      <th>Price</th>
      <th></th>
  </thead>
  <tbody>
    {this.props.products.map(product=>(
    <tr>
     <td> {product.name} </td>  
     <td>{product.price}</td>
     <td><Cart onClick={this.props.onClick} product={product}/></td>
    </tr>
       ))}
  </tbody>
</table>

        </React.Fragment>);
    }
}
 
export default Menu;