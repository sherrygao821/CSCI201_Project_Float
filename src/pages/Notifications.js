import axios from 'axios';
import React from 'react';
import Note from '../components/Note';
import { Redirect } from "react-router-dom";
import "../pages/Notification.css";
import { Component } from 'react';





class Notifications extends Component {
  constructor(props) {
    super(props)

    this.state = {
        notes: []
    }
 
  }
  componentDidMount(){
    if (sessionStorage.length === 0) return <Redirect to="/login" />;

    var url = 'http://35.236.53.120:3000/api/notification/get?userid=' + sessionStorage.getItem('uuid') ;
    var self=this;
    axios.get(url)
    .then(function (response) {
      var localData = response.data.data;
      self.handleData(localData);
    })
    .catch(function (error) {
      console.log(error.request);
    });
  }

  async getPost(postID){
    var url = 'http://35.236.53.120:3000/api/post/read?postid=' + postID;
    const response = await axios.get(url)
    return response.data.data.content;
  }
  
  async handleData(dataArray){
    
    for(var i=0; i<dataArray.length; i++){

        var posterName = dataArray[i].anonymousPosterName;
        var commentContent = 'Commented on your post: ' + dataArray[i].content;
        var postContent;
        await this.getPost(dataArray[i].postID)
          .then(data => {
            postContent = data;
            this.setState(prevState => ({
              notes: [...prevState.notes, (<Note id = {dataArray[i].notificationID} action = {commentContent} username={posterName} 
                postText={postContent}></Note>)]
            }))
          })
          .catch(err => console.log(err)) 
    }

    


    
  }

  render(){
    return (
      <div className='notifications'>
        <div className="title">Notifications</div>
        <div>{this.state.notes}</div>
      </div>
    );
  }
}

export default Notifications;