import axios from 'axios';
import React, { Component } from 'react';
import Post from '../components/Post';

class PostFeed extends Component{
    state = {
        posts : [
            {
                postID:"21961bfa-8973-4a70-93cf-21c1aa7ee632", 
                tags:['#mentalHealth', '#help'], 
                content:"Just had an argument with my parents...blah", 
                likedCount:0,
                comments:[
                    {
                        anonymousPosterName: "baby pig",
                        content: "hi i am baby pig"
                    },
                    {
                        anonymousPosterName: "baby cow",
                        content: "hi i am baby cow"
                    },
                ],
                anonymousPosterName:"zebra",
                userUuid: 1,
             },
             {
                postID:"af59878c-9870-4bf5-a553-c7b2320bde2b", 
                tags:['#mentalhealth'], 
                content:"More...blah", 
                likedCount:0,
                comments:[
                    {
                        anonymousPosterName: "baby pig",
                        content: "what the hell"
                    },
                    {
                        anonymousPosterName: "baby cow",
                        content: "damn u react!!!"
                    },
                ],
                anonymousPosterName:"some animal",
                userUuid: 2,
             }
        ]
    }

    /*
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
    */
    
    

    render() {
        
        // TODO: receive json data of the feed from backend
        
        let items = [];
        console.log(this.state.posts.data);
        
        
        for(var i = 0; i < this.state.posts.length; i++){
            items.push(<Post post = {this.state.posts[i]}/>) 
        }
        
        
        /*
        this.state.posts.data.map((post) => 
            items.push(<Post post = {post}/>) 
        )
        */
        return <div>{items}</div>;
    }
}

export default PostFeed;