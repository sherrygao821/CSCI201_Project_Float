import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import "../components/registerForm.css";


class registerForm extends Component {

    state = {
        account : {
            email:'', password:'', username:''
        },
        status: false
    };

    handleSubmit = e => {
        e.preventDefault();
        // call the server and redirect
        axios.post("http://35.236.53.120:3000/api/auth/signUp", {
            email: this.state.account.email,
            password: this.state.account.password,
            username: this.state.account.username
        })
        .then((response) => {
            console.log(response)
            alert('You have signed up successfully. Welcome to Float! Please log in with the account you just registered');
            this.setState({
                status: true
            })
        })
        .catch((error) => {
            console.log(error)
            alert(error.response.data.message);
        });
    }

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    render(){
        if (this.state.status) return <Redirect to="/login" />;
        //if (sessionStorage.length !== 0) return <Redirect to="/" />;
        const {account} = this.state;

        return (
            <div>
                <h2>Register</h2>
                <form id="register-form" onSubmit={this.handleSubmit}>
                    <div className ="form-group">
                        <label htmlFor="email">Email address: </label>
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
                        <label htmlFor="password">Password: </label>
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
                        <label htmlFor="username">Username: </label>
                        <input 
                        value={account.username} 
                        onChange={this.handleChange}
                        name='username'
                        type="username" 
                        className="form-control" 
                        id="username" 
                        placeholder="Enter Username"></input>
                    </div>
                    <button id="register-button" type="submit" >Register</button>
                </form>
            </div>
        )
        
        
    }
}

export default registerForm;