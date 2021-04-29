import React, { Component } from 'react';
import "../components/Post.css";
import Modal from 'react-modal';
import Comment from '../components/Comment';
import axios from 'axios';

class Post extends Component {
    isLiked = JSON.parse(sessionStorage.getItem('likedPostIDs'));
    randomNames = ["cute alligator", "aggresive anteater", "nice armadillo", "interesting bat", "handsome bear", "delightful beaver", "fancy buffalo", "itchy camel", "nervous chameleon", "quiet cheetah", "lazy coyote", "jolly crow", "delicious goose", "obnoxious llama"];
    state = {
        modalIsOpened: false,
        postComments: [],
        anonymousName: "baby lizard",
        inputComment: "",
        heartPath: "/icons/unheart.png",
        likePost: false
    }

    async componentDidMount(){
        for(var i = 0; i < this.isLiked.length; i++){
            if(this.isLiked[i] === this.props.post.postID){
                console.log("comment numbered " + this.props.post.postID + " is liked");
                this.setState({
                    likePost: true,
                    heartPath: "/icons/heart.png"
                });
                break;
            }
        }
    }

    handleHeart = () => {
        if (this.state.likePost) {
            this.setState({
                heartPath: "/icons/unheart.png",
                likePost: false
            })
            axios.post('http://35.236.53.120:3000/api/post/dislike', {
                postID: this.props.post.postID,
			    userUuid: sessionStorage.getItem('uuid')
            }).then((response) => {
                for(var i = 0; i < this.isLiked.length; i++){
                    if(this.isLiked[i] === this.props.post.postID){
                        this.isLiked.splice(i, 1);
                        sessionStorage.setItem('likedPostIDs', JSON.stringify(this.isLiked));
                        console.log("deleting " + this.props.post.postID + " with content " + this.props.post.content);
                        console.log(sessionStorage.getItem('likedPostIDs'))
                        break;
                    }
                }
            })
        } else {
            this.setState({
                heartPath: "/icons/heart.png",
                likePost: true
            })
            axios.post('http://35.236.53.120:3000/api/post/like', {
                postID: this.props.post.postID,
			    userUuid: sessionStorage.getItem('uuid')
            }).then((response) => {
                this.isLiked.push(this.props.post.postID);
                sessionStorage.setItem('likedPostIDs', JSON.stringify(this.isLiked))
                console.log("adding " + this.props.post.postID + " with content " + this.props.post.content);
                console.log(sessionStorage.getItem('likedPostIDs'))
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
            var name = this.randomNames[Math.floor(Math.random() * this.randomNames.length)];
            axios.post('http://35.236.53.120:3000/api/comment/make/' + this.props.post.postID, {
                anonymousPosterName: name,
                content: this.state.inputComment
            }).then((response) => {
                console.log(response);
                alert("Your comment is created successfully");
                var temp = this.state.postComments;
                temp.push({anonymousPosterName: name, content: this.state.inputComment});
                this.setState({
                    postComments: temp
                })
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
            <div className="wrapPost">
                <div className="topPost">
                    <span className="namePost">{this.props.post.anonymousPosterName}</span>
                    {this.props.post.tags.map((tag, i) => <span className="tagsPost" key={i}>{tag}</span>)}
                </div>
                <div className="midPost">
                    {this.props.post.content}
                </div>
                <div className="botPost">
                    <input id="heart" type="image" src={this.state.heartPath} alt="" className="heartPost" onClick={() => this.handleHeart()} />
                    <input id="comment" type="image" src="/icons/comment.png" alt="" className="commentPost" onClick={() => this.handleComment()} />
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
                        <button className="commentCloseButton" onClick={() => this.closeModal()}>close</button>
                        <div>{comments}</div>
                        <div className="commentBar" style={{position: "fixed", marginBottom: 130, marginLeft: 16}}>
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