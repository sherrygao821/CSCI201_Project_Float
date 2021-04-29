import React from 'react';
import PostFeed from '../components/PostFeed';
import TagWall from '../components/TagWall';
import { Redirect } from "react-router-dom";
import '../pages/Home.css';
import { Component } from 'react';

class Home extends Component{

  state = {
    loggedIn:true,
    posts : {status: false}
  }

  HandleLogOut = e => {
    sessionStorage.clear();
    this.setState({loggedIn:false})
  }
  

  render(){

    if (sessionStorage.length === 0) return <Redirect to="/login" />;

    return (
      <div className='home' >
        <div className="left">
          {/* <SearchBar /> */}
          <PostFeed/>
        </div>
        <div className="right">
          <button id="log-out" onClick={this.HandleLogOut}>Log Out</button>
          <div className="tagWallTitle">Popular Tags</div>
          <TagWall />
        </div>
      </div>
    );
  }
  
}

export default Home;