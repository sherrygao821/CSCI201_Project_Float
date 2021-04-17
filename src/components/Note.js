import React, { Component } from 'react';
import '../components/Note.css';

class Note extends Component {
    render() {
        return(
            <div class="wrapper">
                <div class="top">{this.props.postText}</div>
                <div class="bot">
                    <div class="username">{this.props.username}</div>
                    <label class="action">{this.props.action}</label>
                </div>
            </div>
        );
    }
}

export default Note;