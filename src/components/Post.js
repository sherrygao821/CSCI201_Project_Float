import React, { Component } from 'react';
import "../components/Post.css";
class Post extends Component{
    constructor(props) {
        var heartPath = "/icons/unheart.png";
        var isLiked = new Boolean(false);
        super(props);
        if(this.props.isLiked === "true"){
            heartPath = "/icons/heart.png"
        }
    };

    handleHeart = () => {
        if(this.isLiked === "true"){
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
                    <span class="name">{this.props.post.anonymousPosterName}</span>
                    {this.props.post.tags.map(tag => <span class="tags">{tag}</span>)}
                </div>
                <div class="mid">
                    {this.props.post.content}
                </div>
                <div class="bot">
                    <input id="heart" type="image" src={this.heartPath} alt="" class="heart" onClick={this.handleHeart}/>
                    <input id="comment" type="image" src="/icons/comment.png" alt="" class="comment" onClick={this.handleComment}/>
                </div>
            </div>
        );
    }
}

export default Post;