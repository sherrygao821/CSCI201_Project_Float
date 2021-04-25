import Axios from 'axios';
import React, { Component } from 'react';
import Post from '../components/Post';

class PostFeed extends Component{
    state = {
        posts : {status: false}
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
        
        let items = [];
        console.log(this.state.posts);
        // console.log(this.state.posts.data);
        
        if(this.state.posts.status === true){
            console.log("length:" + this.state.posts.data.length);
            this.state.posts.data.map((post, i) => 
            items.push(<Post key={i} post = {post}/>) 
        )
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