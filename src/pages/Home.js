import React from 'react';
import SearchBar from '../components/SearchBar';
import PostFeed from '../components/PostFeed';
import TagWall from '../components/TagWall';
import '../pages/Home.css';

function Home() {
  return (

    <div className='home' >
      <div class="left">
        <SearchBar></SearchBar>
        <PostFeed></PostFeed>
      </div>
      <div class="right">
        <div class="tagWallTitle">Popular Tags</div>
        <TagWall></TagWall>
      </div>
    </div>
  );
}

export default Home;