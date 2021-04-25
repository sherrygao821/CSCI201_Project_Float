import React, { Component } from 'react';
import "../components/Comment.css";

class Comment extends Component {
    render(){
        return (
            <div className="wrapComment">
                <div className="topComment">
                    <span className="nameComment">{this.props.name}</span>
                </div>
                <div className="midComment">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Comment;