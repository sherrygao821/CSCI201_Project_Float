import { Component } from 'react';
import "../components/TagWall.css";

class TagWall extends Component {

    getPostsUnderTag = (tag) => {
        // TODO: direct to tagpage 
    }

    render() {
        // TODO: import tags from the back end
        var tags = [];
        for(var i = 0; i < 10; i++){
            tags.push(<div class="tag" onClick={() => this.getPostsUnderTag(tags[i])}><span class="taginside">tags[i]</span></div>);
        }
        return (
            <div>
                <div>{tags}</div>
            </div>
        );
    }
}

export default TagWall;