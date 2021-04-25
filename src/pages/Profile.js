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
      <div className="header">
        <label className="left" onClick={() => this.handleYourPosts()} style={this.state.yourPosts}><span className="left-text">Your posts</span></label>
        <label className="right" onClick={() => this.handleLikedPosts()} style={this.state.likedPosts}><span className="right-text">Liked posts</span></label>
      </div>
      <div className="posts">
        <PostFeed></PostFeed>
      </div>
    </div>
    );
  }
}

export default Profile;