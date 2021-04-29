import { Component } from 'react';
import "../components/TagWall.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class TagWall extends Component {

    state = {
        tags: [],
        postIDs: [],
        tagClicked: "",
        redirect: false
    }

    async componentDidMount() {
        await axios.get("http://35.236.53.120:3000/api/tag/get")
        .then((response)=>{
            console.log(response.data.data);
            this.setState({
                tags: response.data.data
            })
        })
    }

    getPostsUnderTag = (i) => {
        this.setState({
            tagClicked: this.state.tags[i],
            redirect: true
        })
    }

    render() {
        // TODO: import tags from the back end and redirect to a new page
        var items = [];
        
        
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/tagPage",
                state: { tag: this.state.tagClicked }
              }}/>
        }
        
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