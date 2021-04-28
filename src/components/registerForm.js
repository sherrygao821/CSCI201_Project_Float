import React, { Component } from 'react'
import axios from 'axios';

class registerForm extends Component {

    state = {
        account : {
            email:'', password:'', username:''
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        // call the server and redirect
        axios.post("http://35.236.53.120:3000/api/auth/signUp", {
            email: this.state.account.email,
            password: this.state.account.password,
            username: this.state.account.username
        })
        .then(function(response){
            console.log(response)
            if(response.status){
                sessionStorage.setItem('uuid', response.data.data.uuid)
                sessionStorage.setItem('postIDs', response.data.data.postIDs)
                sessionStorage.setItem('likedPostIDs', response.data.data.likedPostIDs)
                console.log(sessionStorage)
            }
        })
        .catch(function(error){
            alert(error.response.message);
        });
    }

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    render(){
        const {account} = this.state;

        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className ="form-group">
                        <label htmlFor="email">Email address</label>
                        <input 
                        value={account.email} 
                        onChange={this.handleChange}
                        name='email'
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        value={account.password} 
                        onChange={this.handleChange}
                        name='password'
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter password"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                        value={account.username} 
                        onChange={this.handleChange}
                        name='username'
                        type="username" 
                        className="form-control" 
                        id="username" 
                        placeholder="Enter Username"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        )
        
        
    }
}

export default registerForm;