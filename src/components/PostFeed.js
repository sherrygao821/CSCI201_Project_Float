import React, { Component } from 'react';
import Post from '../components/Post';

class PostFeed extends Component{
    render() {
        // TODO: receive json data of the feed from backend
        let posts = [];
        for (var i = 0; i < 10; i++) {
            posts.push(<Post name="baby zebra" tag="#mentalhealth" 
            isLiked="true" text="Just had a huge argument with my parents. 
            Living with them makes me feel like a child again. 
            I really want to move out, but I can’t support myself 
            financially. What do you guys think I should do?"></Post>);
        }
        return <div>{posts}</div>;
    }
}

export default PostFeed;