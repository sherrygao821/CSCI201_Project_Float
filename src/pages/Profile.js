import React, { Component } from 'react';
import '../pages/Profile.css';
import Post from '../components/Post';
import axios from 'axios';

const selected = {
  background: "#FFFFFF",
  color: "#626262",
  zIndex: 1
};
const unselected = {
  background: '#82ACA2',
  color:'#FFFFFF',
};

class Profile extends Component{
  postIDs = JSON.parse(sessionStorage.getItem('postIDs'));
  likedIDs = JSON.parse(sessionStorage.getItem('likedPostIDs'));
  likePosts = [];
  yourPosts = [];

  state = {
    currTab: "YourPosts",
    yourPostsStyle: selected,
    likedPostsStyle: unselected,
    items: this.yourPosts
  };

  async componentDidMount() {
    console.log("postIDs.length: " + this.postIDs.length)
    for (var i = 0; i < this.postIDs.length; i++) {
      await axios.get("http://35.236.53.120:3000/api/post/read?postid=" + this.postIDs[i])
        .then((response) => {
          this.yourPosts.push(<Post post = {response.data.data}/>)
        })
        this.setState({
          items: this.yourPosts
        })
    }
    console.log("likedIDs.length: " + this.likedIDs.length)
    for (var j = 0; j < this.likedIDs.length; j++) {
      await axios.get("http://35.236.53.120:3000/api/post/read?postid=" + this.likedIDs[j])
        .then((response) => {
          this.likePosts.push(<Post post = {response.data.data}/>)
        })
    }
  }

  handleYourPosts = () => {
    if(this.state.currTab !== "YourPosts"){
      this.setState({
        currTab: "YourPosts",
        yourPostsStyle: selected,
        likedPostsStyle: unselected,
        items: this.yourPosts
      })
    }
  }

  handleLikedPosts = () => {
    if(this.state.currTab !== "LikedPosts"){
      this.setState({
        currTab: "LikedPosts",
        yourPostsStyle: unselected,
        likedPostsStyle: selected,
        items: this.likePosts
      })
    }
  }

  render() {
    return (
      <div className='profile'>
      <div className="header">
        <label className="left" onClick={() => this.handleYourPosts()}><span className="left-text" style={this.state.yourPostsStyle}>Your posts</span></label>
        <label className="right" onClick={() => this.handleLikedPosts()}><span className="right-text" style={this.state.likedPostsStyle}>Liked posts</span></label>
      </div>
      <div className="posts">
        {this.state.items}
      </div>
    </div>
    );
  }
}

export default Profile;