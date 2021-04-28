import React, { Component } from 'react';
import '../pages/Profile.css'
import Post from '../components/Post'
import { InterpolateSmooth } from 'three';

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
  likedIDs = JSON.parse(sessionStorage.getItem('likedPostIDs'))

  constructor(props) {
    super(props);
    this.state = {
      currTab: "YourPosts",
      yourPosts: selected,
      likedPosts: unselected,
      postFeed: this.postIDs
    };
  }

  handleYourPosts = () => {
    if(this.state.currTab !== "YourPosts"){
      this.setState({
        currTab: "YourPosts",
        yourPosts: selected,
        likedPosts: unselected,
        postFeed: this.postIDs
      })
    }
  }

  handleLikedPosts = () => {
    if(this.state.currTab !== "LikedPosts"){
      this.setState({
        currTab: "LikedPosts",
        yourPosts: unselected,
        likedPosts: selected,
        postFeed: this.likedIDs
      })
    }
  }
  render() {
    var items = [];
    for(var i = 0; i < this.state.postFeed.length; i++){
      items.push()
    }
    return (
      <div className='profile'>
      <div className="header">
        <label className="left" onClick={() => this.handleYourPosts()} style={this.state.yourPosts}><span className="left-text">Your posts</span></label>
        <label className="right" onClick={() => this.handleLikedPosts()} style={this.state.likedPosts}><span className="right-text">Liked posts</span></label>
      </div>
      <div className="posts">

      </div>
    </div>
    );
  }
}

export default Profile;