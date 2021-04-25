import Axios from 'axios';
import React, { Component } from 'react';
import Post from '../components/Post';

class PostFeed extends Component{
    state = {
        posts : [
            {
                postID:1, 
                tags:['#mentalHealth', '#help'], 
                content:"Just had an argument with my parents...blah", 
                likedCount:0,
                comments:["Been there."],
                anonymousPosterName:"zebra",
                userUuid: 1,
             },
             {
                postID:2, 
                tags:['#mentalhealth'], 
                content:"More...blah", 
                likedCount:0,
                comments:["Been there."],
                anonymousPosterName:"some animal",
                userUuid: 2,
             }
        ]
    }

    async componentDidMount() {
        // pending > resolved (success) OR rejected (failure)
        const { data: posts } = await Axios.get("http://35.236.53.120:3000/api/post/get");
        this.setState({ posts });
      }

    handleAdd = async () => {
        const obj = { 
                        content:"Just had an argument with my parents...blah",
                        tags: ['#mentalHealth'],
                        anonymousPosterName:"zebra",
                        userUuid: 1,
                    };
        const { data: post } = await Axios.post("http://35.236.53.120:3000/api/post/make", obj);

        const posts = [post, ...this.state.posts];
        this.setState({ posts });
    };

    render() {
        
        // TODO: receive json data of the feed from backend
        let posts = [];
        {this.state.posts.map(post => (
            posts.push(<Post post = {post}/>) 
        ))}
        return <div>{posts}</div>;
    }
}

export default PostFeed;