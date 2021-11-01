import React from 'react';
class Admin extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() { 
        const {products, onReset,onDelete} = this.props;

        return(<React.Fragment>
            <h1>Admin</h1>
            <button className="btn btn-secondary btn-sm m-2" onClick={()=> this.props.history.push("/addproduct/new")}>Add</button>

             <table className="table">
    <thead>
        <th>Name</th>
        <th>Price</th>
        <th></th>
        <th></th>
    </thead>
    <tbody>
    {products.map(product=>(
    <tr>
     <td>     { product.name}</td>  
     <td>     { product.price}</td>
     <td><i style={{cursor:'pointer'}} className="fas fa-edit"  onClick={() => this.props.history.push(`/addproduct/${product.id}`)} ></i> </td>
     <td><i style={{cursor:'pointer'}} className="fas fa-trash" onClick={() => onDelete(product)}></i></td>
    </tr>
       ))}
  </tbody>
  </table>
  
          </React.Fragment>);

    }
}
 
export default Admin;