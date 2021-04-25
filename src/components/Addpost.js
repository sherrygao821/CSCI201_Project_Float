import React, { useState } from 'react';
import './addpost.css'


function Addpost(props){
    const [text, setText] = useState('')

    function handleChange(event) {
      setText(event.target.value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      alert('Your post was submitted: ' + text)
    }
  
      return (

        <form onSubmit={handleSubmit}>
            
            <textarea placeholder="what's on your mind...?" onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
      );
  }

  export default Addpost;