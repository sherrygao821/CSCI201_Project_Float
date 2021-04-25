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
        heartPath: "/icons/unheart.png",
        likePost: false
    }

    constructor(props) {
        super(props);
        var isLiked = sessionStorage.getItem('likedPostIDs')
        for(var i = 0; i < isLiked.length; i++){
            if(isLiked[i] === props.post.postID){
                this.setState({
                    heartPath: "/icons/heart.png",
                    likePost: true
                })
                break;
            }
        }
    };

    handleHeart = () => {
        if (this.state.likePost === true) {
            axios.post('http://35.236.53.120:3000/api/post/dislike', {
                postID: this.props.post.postID,
			    userUuid: sessionStorage.getItem('uuid')
            }).then((response) => {
                this.setState({
                    likePost: false,
                    heartPath: "/icons/unheart.png"
                })
            })
        } else {
            console.log("postID: " + this.props.post.postID)
            axios.post('http://35.236.53.120:3000/api/post/like', {
                postID: this.props.post.postID,
			    userUuid: sessionStorage.getItem('uuid')
            }).then((response) => {
                this.setState({
                    likePost: true,
                    heartPath: "/icons/heart.png"
                })
            })
        }
    };

    handleComment = () => {
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
        console.log("comment: " + this.state.inputComment);
        console.log("postID: " + this.props.post.postID);
        if (this.state.inputComment.trim() !== "") {
            // Calling API: add the comment to the post
            
            axios.post('http://35.236.53.120:3000/api/comment/make/' + this.props.post.postID, {
                anonymousPosterName: this.state.anonymousName,
                content: this.state.inputComment
            }).then((response) => {
                console.log(response);
                alert("Your comment is created successfully");
                // TODO: add the new post to the current page
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
        this.state.postComments.map((comment, i) => (
            comments.push(<Comment key={i} name={comment.anonymousPosterName} content={comment.content} />)
        ))
        return (
            <div className="wrap">
                <div className="top">
                    <span className="name">{this.props.post.anonymousPosterName}</span>
                    {this.props.post.tags.map((tag, i) => <span className="tags" key={i}>{tag}</span>)}
                </div>
                <div className="mid">
                    {this.props.post.content}
                </div>
                <div className="bot">
                    <input id="heart" type="image" src={this.state.heartPath} alt="" className="heart" onClick={() => this.handleHeart()} />
                    <input id="comment" type="image" src="/icons/comment.png" alt="" className="comment" onClick={() => this.handleComment()} />
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