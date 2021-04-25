import React from 'react';
import SearchBar from '../components/SearchBar';
import PostFeed from '../components/PostFeed';
import TagWall from '../components/TagWall';
import '../pages/Home.css';

function Home() {
  return (

    <div className='home' >
      <div className="left">
        <SearchBar />
        <PostFeed/>
      </div>
      <div className="right">
        <div className="tagWallTitle">Popular Tags</div>
        <TagWall />
      </div>
    </div>
  );
}

export default Home;