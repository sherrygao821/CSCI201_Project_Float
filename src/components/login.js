import React, { Component } from 'react'


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
        // console.log(this.state.data)
        const axios = require('axios');
        var self = this;
        axios.get('http://35.236.53.120:3000/api/auth/login?email='
        + this.state.email + '&psw=' + this.state.psw, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            console.log('hi')
            
            console.log(response.data.data.uuid)
            self.setState({
                uuid: response.data.data.uuid,
                postIDs: response.data.data.postIDs,
                likedPostIDs: response.data.data.likedPostIDs
            })
            
        })
        .catch(function (error) {
            // console.log(error)
            // console.log(error.request)
            // console.log(error.response)
            // const obj = JSON.parse(error.response)
        })
        .then(function (){
            console.log(self.state)
            sessionStorage.setItem('uuid', self.state.uuid)
            sessionStorage.setItem('postIDs', self.state.postIDs)
            sessionStorage.setItem('likedPostIDs', self.state.likedPostIDs)
            console.log(sessionStorage.getItem('uuid'))
        });
    }
    
    render() {
        const {email, psw} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="email" value={email} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="password" name="psw" value={psw} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default login
