import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import "../components/registerForm.css";

class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            psw: '',
            uuid: '',
            usename: '',
            postIDs: [],
            likedPostIDs: []

        }
        // this.changeHandler = this.changeHandler.bind(this);
    }

    
    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()
        const axios = require('axios');
        var self = this;
        axios.get('http://35.236.53.120:3000/api/auth/login?email='
        + this.state.email + '&psw=' + this.state.psw, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            console.log(response);
            self.setState({
                uuid: response.data.data.uuid,
                postIDs: response.data.data.postIDs,
                likedPostIDs: response.data.data.likedPostIDs
            })
            
        })
        .catch(function (error) {
            alert(error.response.data.message)
        })
        .then(function (){
            sessionStorage.setItem('uuid', self.state.uuid)
            sessionStorage.setItem('postIDs', JSON.stringify(self.state.postIDs))
            sessionStorage.setItem('likedPostIDs', JSON.stringify(self.state.likedPostIDs))
            console.log(sessionStorage)
        });
    }
    
    render() {
        //console.log();
        
        if (sessionStorage.length === 3) return <Redirect to="/" />;
        const {email, psw} = this.state
        return (
            <div>
                <h2>Log In</h2>
                <form id="login-form" onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="email">Email address: </label>
                        <input className="form-control" type="text" name="email" value={email} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input className="form-control" type="password" autoComplete="current-password" name="psw" value={psw} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <button id="login-button" type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default login
