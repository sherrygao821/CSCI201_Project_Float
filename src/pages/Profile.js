import React, { Component } from 'react';
import '../pages/Profile.css'
import PostFeed from '../components/PostFeed'

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
  constructor(props) {
    super(props);
    this.state = {
      currTab: "YourPosts",
      yourPosts: selected,
      likedPosts: unselected,
    };
  }
  // TODO: return posts wrote by the user from the backend
  handleYourPosts = () => {
    if(this.state.currTab !== "YourPosts"){
      console.log("here1");
      this.setState({
        currTab: "YourPosts",
        yourPosts: selected,
        likedPosts: unselected
      })
    }
  }
  // TODO: return posts liked by the user from the backend
  handleLikedPosts = () => {
    if(this.state.currTab !== "LikedPosts"){
      console.log("here2");
      this.setState({
        currTab: "LikedPosts",
        yourPosts: unselected,
        likedPosts: selected
      })
    }
  }
  render() {
    return (
      <div className='profile'>
      <div class="header">
        <label class="left" onClick={() => this.handleYourPosts()} style={this.state.yourPosts}><span class="left-text">Your posts</span></label>
        <label class="right" onClick={() => this.handleLikedPosts()} style={this.state.likedPosts}><span class="right-text">Liked posts</span></label>
      </div>
      <div class="posts">
        <PostFeed></PostFeed>
      </div>
    </div>
    );
  }
}

export default Profile;