import axios from 'axios';
import React, { useState } from 'react';
import './addpost.css'


function Addpost(props){
    const randomNames = ["cute alligator", "aggresive anteater", "nice armadillo", "interesting bat", "handsome bear", "delightful beaver", "fancy buffalo", "itchy camel", "nervous chameleon", "quiet cheetah", "lazy coyote", "jolly crow", "delicious goose", "obnoxious llama"]
    const [text, setText] = useState('')
    const [tags, setTags] = useState('')

    function handleChangeText(event) {
      setText(event.target.value);
    }
    
    function handleChangeTags(event) {
      setTags(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      let tagsArr = tags.split(','); 
      for(let i=0; i<tagsArr.length; i++){
        tagsArr[i]=tagsArr[i].trim()
      }

      axios.post('http://35.236.53.120:3000/api/post/make', {
        content: text,
        tags: tagsArr,
        anonymousPosterName: randomNames[Math.floor(Math.random() * randomNames.length)],
        userUuid: sessionStorage.getItem('uuid')
      })
      .then(function (response) {
        console.log(response.data.data.postID)
        var temp = [];
        temp = JSON.parse(sessionStorage.getItem('postIDs'));
        temp.push(response.data.data.postID);
        sessionStorage.setItem('postIDs', JSON.stringify(temp));
        console.log(sessionStorage.getItem('postIDs'));
      })
    }
  
      return (
        <div id="addPostDiv">
          <form onSubmit={handleSubmit}>
              <input type="text" id="tags" placeholder="tags... (separate by comma)" onChange={handleChangeTags} />
              <br></br><br></br>
              <textarea id="post" placeholder="what's on your mind...?" onChange={handleChangeText} />
              
              <input id="submit" type="submit" value="Publish" />
          </form>
        </div>
      );
  }

  export default Addpost;