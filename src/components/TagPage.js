import { Component } from 'react';
import "../components/TagWall.css";
import Post from 'Post.js';

class TagPage extends Component {
    // TODO: receive data from Tag Wall
    state = {
        tag = "usc",
        items = []
    };

    constructor(props){
        this.getPostsUnderTag();
    }
    
    getPostsUnderTag = () => {
        // TODO: get postIDs information for that tag
        // TODO: for each postID read the post
    }
    

    render(){
        return(
            <div>
                <div># {tag}</div>
                <div>{items}</div>
            </div>
        );
    }
}

export default TagPage