import { Component } from 'react';
import "../components/TagWall.css";

class TagWall extends Component {
    render() {
        // TODO: import tags from the back end
        var tags = [];
        for(var i = 0; i < 10; i++){
            tags.push(<div class="tag"><span class="taginside">#WAKAKAKKAKA</span></div>);
        }
        return (
            <div>
                <div>{tags}</div>
            </div>
        );
    }
}

export default TagWall;