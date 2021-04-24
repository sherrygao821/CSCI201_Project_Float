import React, { Component } from 'react'
import axios from 'axios'

class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:{
                email: '',
                psw: ''
            }
        }
    }


    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state.data)
        axios.get('http://35.236.53.120:3000/api/auth/login', this.state.data)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
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
                        <input type="text" name="psw" value={psw} onChange={this.changeHandler}/>
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
