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
            likedPostIDs: [],
            redirect :false,
            status: false
        }
        // this.changeHandler = this.changeHandler.bind(this);
    }

    HandleClick = () => {
        this.setState({redirect:true});
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
        .then((response) => {
            console.log(response);
            self.setState({
                uuid: response.data.data.uuid,
                postIDs: response.data.data.postIDs,
                likedPostIDs: response.data.data.likedPostIDs
            })
            sessionStorage.setItem('uuid', self.state.uuid)
            sessionStorage.setItem('postIDs', JSON.stringify(self.state.postIDs))
            sessionStorage.setItem('likedPostIDs', JSON.stringify(self.state.likedPostIDs))
            console.log(sessionStorage)
            this.setState({
                status: true
            })
        })
        .catch(function (error) {
            alert(error.response.data.message)
        });
    }
    
    render() {
        //console.log();
        if (this.state.redirect === true) return <Redirect to="/register" />;
        
        if (this.state.status) return <Redirect to="/" />;
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
                    <label htmlFor="toRegister-button">Not registered? </label>
                    <button id="toRegister-button" onClick={this.HandleClick}>Go register</button>
                    <div>
                        <button id="login-button" type="submit">Submit</button>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default login
