import React from 'react'
import './addpost.css'

const AddPost = props => {
    if (!props.show){
        return null
    }
    return(
        <div className = "modal">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h4>New Post</h4>
                </div>
                <div className = "modal-body">
                    Hello hello helo
                </div>
                <div className = "modal-footer">
                    <button className = "button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default AddPost;