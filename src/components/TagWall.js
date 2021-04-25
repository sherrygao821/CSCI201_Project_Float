import { Component } from 'react';
import "../components/TagWall.css";

class TagWall extends Component {

    state = {
        tags: ["#usc", "#ucla", "#cornell", "#northwestern", "#emory", "#ucb"],
        postIDs: [],
        tagClicked: ""
    }

    getPostsUnderTag = (i) => {
        this.setState({
            tagClicked: this.state.tags[i]
        })
    }

    render() {
        // TODO: import tags from the back end and redirect to a new page
        var items = [];
        
        /*
        if (redirect) {
            return <Redirect to="/profile/" />
        }
        */

        for (var i = 0; i < this.state.tags.length; i++) {
            items.push(<div className="tag" key={i} onClick={this.getPostsUnderTag.bind(this, i)}><span className="taginside">{this.state.tags[i]}</span></div>);

        }

        return (
            <div>
                {items}
            </div>
        );
    }
}

export default TagWall;