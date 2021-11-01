import React from 'react';
import axios, { Axios } from 'axios';
class AddProduct extends React.Component {
    state={
        id:"", name : "", price : ""
    };
    async componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id);
        if(id!=="new")
        {
            const {data} =await axios.get('http://localhost:3000/products/'+id);
            //Clone
            const state ={...this.state};
            //Edit
            state.name = data.name;
            state.price = data.price;
            state.id = data.id;
            //Set State
            this.setState(state);

        }
    };
    handleSubmit=  async e =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        const obj = {...this.state, count: 0,  isInCart:false};
        if(id ==="new")
      { 
        const obj = {...this.state, count: 0,  isInCart:false};
        //Call Backend Server
        await axios.post('http://localhost:3000/products/',obj)
    } else{
    const obj = {...this.state, count: 0,  isInCart:false};
    delete obj.id;
    await axios.put('http://localhost:3000/products/'+this.state.id,obj);
    }
    this.props.history.replace('/admin')
};
    handleChange = e=>{
        //clone
        let state = {...this.state};
        //edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //setState
        this.setState(state);
    };
 
    render() { 
        return(
        <React.Fragment>
            <h1>{this.props.match.params.id ==="new" ? "AddProduct": "Edit Product"}</h1>
            <form >
  <div className="mb-3">
    <label  htmlFor="name" className="form-label">Name</label>
    <input name="name" value={this.state.name} onChange={this.handleChange} type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Price</label>
    <input name="price" value={this.state.price} onChange={this.handleChange} type="text" className="form-control" id="price"/>
  </div>
  <button onClick={this.handleSubmit} type="submit" className="btn btn-primary"> {this.props.match.params.id ==="new" ? "Add": "Edit"}</button>
            </form>
        </React.Fragment>);
    }
}

 
export default AddProduct;