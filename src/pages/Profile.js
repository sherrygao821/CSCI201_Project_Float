import React, { Component } from 'react';
import '../pages/Profile.css';
import Post from '../components/Post';
import axios from 'axios';
import AXIOS from 'axios';

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
  likePosts = [];
  yourPosts = [];

  state = {
    currTab: "YourPosts",
    yourPostsStyle: selected,
    likedPostsStyle: unselected,
    items: this.yourPosts,
  };

  async componentDidMount() {
    this.yourPosts = [];
    var postIDs = [];
    postIDs = JSON.parse(sessionStorage.getItem('postIDs'));
    console.log("storage length: " + postIDs.length);
    for (var i = 0; i < postIDs.length; i++) {
      axios.get("http://35.236.53.120:3000/api/post/read?postid=" + postIDs[i])
        .then((response) => {
          this.yourPosts.push(<Post post = {response.data.data}/>)
          this.setState({
            items: this.yourPosts
          })
        })
    }
    
  }

  async getLikedPosts(){
    this.likePosts = [];
    var likedIDs = [];
    likedIDs = JSON.parse(sessionStorage.getItem('likedPostIDs'));
    console.log(sessionStorage.getItem('likedPostIDs'))
    console.log("storage length: " + likedIDs.length);
    for (var j = 0; j < likedIDs.length; j++) {
      console.log(j + " ID: " + likedIDs[j]);
      AXIOS.get("http://35.236.53.120:3000/api/post/read?postid=" + likedIDs[j])
        .then((response) => {
          this.likePosts.push(<Post post = {response.data.data}/>)
          this.setState({
            items: this.likePosts
          })
        })
    }
  }

  handleYourPosts = () => {
    if(this.state.currTab !== "YourPosts"){
      this.componentDidMount();
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
      this.likeIDs = JSON.parse(sessionStorage.getItem('likedPostIDs'))
      console.log(sessionStorage.getItem('likedPostIDs'));
      this.getLikedPosts();
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
        <div className="profilePosts" style={{diplay: "block"}}>
          {this.state.items}
        </div>
      </div>
    );
  }
}

export default Profile;