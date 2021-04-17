import React, { Component } from 'react';
import "../components/Post.css";
class Post extends Component{
    constructor(props) {
        var heartPath = "/icons/unheart.png";
        super(props);
        if(this.props.isLiked === "true"){
            heartPath = "/icons/heart.png"
        }
        // TODO: should also pass in the user's info so we can delete/add info
        this.state = {
            name: this.props.name,
            tag: this.props.tag,
            text: this.props.text,
            isLiked: this.props.isLiked,
            heartPath: heartPath
        };
    };

    handleHeart = () => {
        if(this.state.isLiked === "true"){
            this.setState({
                isLiked: "false",
                heartPath: "/icons/unheart.png"
            })
            // TODO: delete current user's liking status of this post
        } else {
            this.setState({
                isLiked: "true",
                heartPath: "/icons/heart.png"
            })
            // TODO: add current user's liking status of this post
        }
    };

    handleComment = () => {
        // TODO: receive comments for this post from the back end
    }

    render() {
        return (
            <div class="wrap">
                <div class="top">
                    <span class="name">{this.state.name}</span>
                    <span class="tags">{this.state.tag}</span>
                </div>
                <div class="mid">
                    {this.state.text}
                </div>
                <div class="bot">
                    <input id="heart" type="image" src={this.state.heartPath} alt="" class="heart" onClick={this.handleHeart}/>
                    <input id="comment" type="image" src="/icons/comment.png" alt="" class="comment" onClick={this.handleComment}/>
                </div>
            </div>
        );
    }
}

export default Post;