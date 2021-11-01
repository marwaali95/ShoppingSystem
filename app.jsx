import React from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';
import Axios from 'axios';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';


import Menu from './menu';
import NavBar from './navbar';
import ShoppingCart from './shoppingcart';
import LoginForm from './loginform';
import Admin from './admin';
import AddProduct from './productform';

class App extends React.Component {
    
    state = {
        products:[]

    };
    async componentDidMount(){
        //Call Backend Server
        const {data} =  await Axios.get('http://localhost:3000/products');
        //Set State
        this.setState({products : data});
    }
    handleDelete= async(product)=>{
        //Call Backend
        const oldProduct = [...this.state.products];
        //State
        //Clone
        //Edits
        const newProduct= this.state.products.filter(p=> p.id !== product.id);
        this.setState({products: newProduct});
        console.log(newProduct);
        console.log("Deleted");
        try{
            await axios.delete('http://localhost:3000/products/'+product.id);
        }catch(ex){
            toast.error("Can't Delete");
            this.setState({products: oldProduct});
        }
        //setState
    };
    handleReset=(product) =>{
        //clone 
        let products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        //Edit
        products[index].isInCart=true;
        //Edit
        products=products.filter(p=>p.isInCart);

        products= products.map(p =>{
            p.count=0;
            return p;
        })
        //setState
        this.setState(products);
    }
    handleIncrement = (product) =>
    {
                //clone 
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        //Edit
        products[index].count++;
        //Set State
        this.setState({products});
    }
    handleInCartChange = (product)=>
    {
        //clone 
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        //Edit
        products[index].isInCart=!products[index].isInCart;
        products[index].count=1;
        //Set State
        this.setState({products});
    

    }
    productCount= ()=>
    {
        const products = [...this.state.products];
        const pcount = products.filter(p=> p.isInCart && p.count>0).length;
        return pcount;
    }

    render() { 
        return ( <React.Fragment>
            <ToastContainer/>
        <NavBar productCount={this.productCount}/>
        <main className="container">
          <Switch>
          <Route
              path="/addproduct/:id" component={AddProduct}
              />
          <Route path="/admin" render={(props)=>(
              <Admin
              products={this.state.products}
              onDelete={this.handleDelete}
              {...props}
              />
          )}/>
              <Route
              path="/login" component={LoginForm}
              />
          <Route path="/cart" render={(props)=>(
              <ShoppingCart
              products={this.state.products.filter(p=>p.isInCart)}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleInCartChange}
              {...props}
              />
          )}/>
          
          <Route
           path="/menu" 
           render={(props)=>
              <Menu 
              products={this.state.products}
              onClick={this.handleInCartChange}
              {...props}
              />}
        />
            <Redirect from = "/" to= '/menu' />
            </Switch>
        </main>
        
    </React.Fragment>);
    }
}
 
export default App;