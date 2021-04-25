import React, { Component } from 'react';
import '../components/Note.css';

class Note extends Component {
    render() {
        return(
            <div className="wrapper">
                <div className="top">{this.props.postText}</div>
                <div className="bot">
                    <div className="username">{this.props.username}</div>
                    <label className="action">{this.props.action}</label>
                </div>
            </div>
        );
    }
}

export default Note;