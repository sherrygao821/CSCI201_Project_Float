import React, { Component } from 'react'
import "./TabBar.css"

class TabBar extends Component{
    navigate(){
        this.navigateTo()
    }
    render(){
        return(
            <div class='tabbar'>
                <button class='top' onClick={() => this.navigateTo()}>CREATE</button>
                <button class='bot'>HOME</button>
                <button class='bot'>MESSAGE</button>
                <button class='bot'>NOTIFICATION</button>
                <button class='bot'>PROFILE</button>
            </div>
        )
    }
}

export default TabBar