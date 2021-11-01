import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShoppingCart from './shoppingcart';

const NavBar = (props) => {
  return ( 
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/" >Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link " to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/cart"> Shopping Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/admin"> Admin</Link>
        </li>
       </ul>
    </div>

        <span className="badge badge-primary"> 
        < i style={{cursor:'pointer'}}
        onClick={<Route> path="/cart" component={<ShoppingCart/>}</Route>} 
        className="fas fa-shopping-cart"></i>{props.productCount}</span>
    </nav> 
);
} 
 
export default NavBar;