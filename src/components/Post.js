import React, { Component } from 'react';
import "../components/Post.css";
import Modal from 'react-modal';
import Comment from '../components/Comment';
import axios from 'axios';

class Post extends Component {
    state = {
        modalIsOpened: false,
        postComments: [],
        anonymousName: "baby lizard",
        inputComment: "",
    };

    constructor(props) {
        var heartPath = "/icons/unheart.png";
        var isLiked = new Boolean(false);
        super(props);
        if (isLiked === true) {
            heartPath = "/icons/heart.png"
        }
    };

    handleHeart = () => {
        if (this.isLiked === true) {
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
        console.log(this.props.post.comments);
        this.setState({
            postComments: this.props.post.comments,
            modalIsOpened: true,
        })
    }

    closeModal = () => {
        this.setState({
            modalIsOpened: false,
        })
    }

    addComment = () => {
        if (this.state.inputComment.trim() !== "") {
            // Calling API: add the comment to the post
            axios.post('http://35.236.53.120:3000/api/comment/make/' + this.props.post.postID, {
                anonymousPosterName: this.state.anonymousName,
                content: this.state.inputComment
            }).then((response) => {
                console.log(response);
                alert("Your post is created successfully");
                // TODO: add the new post to the current page
                /*
                comments.push(
                    {
                        anonymousPosterName: anonymousName,
                        content: inputComment
                    }
                )
                */
            }, (error) => {
                console.log(error);
            });
        }
    };

    bindChange = (e) => {
        this.setState({
            inputComment: e.target.value
        })
    };

    render() {
        let comments = [];
        this.state.postComments.map(comment => (
            comments.push(<Comment name={comment.anonymousPosterName} content={comment.content} />)
        ))
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
                    <input id="heart" type="image" src={this.heartPath} alt="" class="heart" onClick={() => this.handleHeart()} />
                    <input id="comment" type="image" src="/icons/comment.png" alt="" class="comment" onClick={() => this.handleComment()} />
                </div>
                <div>
                    <Modal isOpen={this.state.modalIsOpened} ariaHideApp={false} style={{
                        content: {
                            position: 'absolute',
                            top: '100px',
                            left: '400px',
                            right: '400px',
                            bottom: '100px',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '20px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }}>
                        <button onClick={() => this.closeModal()}>close</button>
                        <div>{comments}</div>
                        <div className="commentBar">
                            <input
                                className="input"
                                onChange={(e) => this.bindChange(e)}
                                placeholder="Write your comments here...">
                            </input>
                            <button className="send" onClick={() => this.addComment()}>send</button>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Post;