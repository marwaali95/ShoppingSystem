import React from 'react';
import{Link} from 'react-router-dom';

class Product extends React.Component {
    getClasses(){
        return this.props.myproduct.count === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2" ;
    }
    render() { 
        return <React.Fragment>
            <div className="row">
              <div className="col-1">  
              <span> 
              <Link to ={`/products/${this.props.myproduct.id}`} >
                 {this.props.myproduct.name}
             </Link>
                 </span>
            </div>
              <div className="col">
                <span className={this.getClasses()}>{this.props.myproduct.count}  </span>
                <button onClick={() =>this.props.onIncrement(this.props.myproduct)/* 2.solution to send param. for handler this.incrementHandler.bind(this,2)*/} className= "btn btn-primary btn-sm">+</button>
               <span style={{cursor:'pointer'}} onClick={() => this.props.onDelete(this.props.myproduct)}>
                <i className="fas fa-trash m-2" ></i>
               </span>
                </div>
            </div>
        
    

        </React.Fragment>;
    }
}
 
export default Product;