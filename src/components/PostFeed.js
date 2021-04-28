import Axios from 'axios';
import React, { Component } from 'react';
import Post from '../components/Post';
import "../components/SearchBar.css";

class PostFeed extends Component{
    state = {
        posts : {status: false},
        inputWord: ""
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
    
    bindChange = (e) => {
        const posts = {...this.state.posts};
        this.setState({ posts, inputWord: e.target.value });

    };
    
    searchWord = () => {
        if (this.state.inputWord.trim() !== "") {
          // TODO: use API to search for words/tags
          const keyword = this.state.inputWord.trim();
          console.log(keyword);
          Axios.get("http://35.236.53.120:3000/api/post/get?keyword=" + keyword)
          .then((response)=>{
            //const inner = [...response.data.data];
           
            this.setState({
                posts:response.data
            });
          })
        }
    };

    render() {
        
        let items = [];
        
        if(this.state.posts.status === true){
            console.log("length:" + this.state.posts.data.length);
            this.state.posts.data.map((post, i) => 
            items.push(<Post key={i} post = {post}/>) 
        )
        }
 
        return (
        <div id="parent">
            
            <div className="searchBar">
            <img className="left" src="/icons/search.png" alt="" />
            <input
                className="mid"
                onChange={(e) => this.bindChange(e)}
                placeholder="Search for keywords or tags"></input>
            <button className="right" onClick={() => this.searchWord()}>search</button>
            </div>

            <div>{items}</div>
      </div>)
        
    }
}

export default PostFeed;