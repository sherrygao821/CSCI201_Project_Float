import axios from 'axios';
import React, { useState } from 'react';
import './addpost.css'


function Addpost(props){
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
        anonymousPosterName: sessionStorage.getItem('uuid'),
        userUuid: sessionStorage.getItem('uuid')
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error.request)
      })
      
    }
  
      return (

        <form onSubmit={handleSubmit}>
            <input type="text" id="tags" placeholder="tags... (separate by comma)" onChange={handleChangeTags} />
            <textarea placeholder="what's on your mind...?" onChange={handleChangeText} />
            
            <input type="submit" value="Submit" />
        </form>
      );
  }

  export default Addpost;