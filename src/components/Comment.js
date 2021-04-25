import React, { Component } from 'react';
import "../components/Comment.css";

class Comment extends Component {
    render(){
        return (
            <div class="wrapComment">
                <div class="topComment">
                    <span class="nameComment">{this.props.name}</span>
                </div>
                <div class="midComment">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Comment;