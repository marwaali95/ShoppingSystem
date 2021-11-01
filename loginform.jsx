import React from 'react';
import Joi, { abort } from 'joi-browser';
class LoginForm extends React.Component {
    state={
        username:"",
        password:"",
        errors:{}
    };
    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };
     validate= () => {
         const errors ={};
        const state ={...this.state};
        delete state.errors;
        const results = Joi.validate(state,this.schema, {abortEarly:false});
        if(results.error === null)
        {
            this.setState({errors:{}});
            return
        }
        for(const error of results.error.details){
            errors[error.path] = error.message;
        }
       console.log(results);
       this.setState({errors});     
    };
    handleSubmit = e=>{
        e.preventDefault();
        const errors = this.validate();
        if(errors) return

       //call Backend Server
       console.log("Submit");
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
        return(<React.Fragment>
            <h1>Login</h1>
            <form >
  <div className="mb-3">
    <label  htmlFor="username" className="form-label">Email address</label>
    <input name="username" value={this.state.username} onChange={this.handleChange} type="email" className="form-control" id="username" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  {this.state.errors.username &&( <div className="alert alert-danger">{this.state.errors.username}</div>)}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1"/>
  {this.state.errors.password &&(<div className="alert alert-danger">{this.state.errors.password}</div>)}
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
</form>
        </React.Fragment>);
    }
}
 
export default LoginForm;