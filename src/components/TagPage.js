import axios from 'axios';
import Post from '../components/Post';
import { Component } from 'react';

class TagPage extends Component {
  items = [];
  status;
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    await axios.get("http://35.236.53.120:3000/api/post/get?tags=" + this.props.location.state.tag)
      .then((response) => {
        console.log(response.data.data);
        for (var i = 0; i < response.data.data.length; i++) {
          console.log(response.data.data[i]);
          this.items.push(<Post post={response.data.data[i]} />)
          this.status = true;
        }
      }).catch((error) => {
        console.log(error);
        this.status = false;
      })
    this.setState({
      posts: this.items
    })
  }

  render() {
    if(this.status === false){
      return(
        <div style={{fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: 36,color: "#626262", marginTop: 50, textAlign: "center", textDecoration: "underline"}}>
            #{this.props.location.state.tag} has no posts.
          </div>
      );
    }
    else{
      return (
        <div>
          <div style={{fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: 36,color: "#626262", marginTop: 50, textAlign: "center", textDecoration: "underline"}}>
            #{this.props.location.state.tag}
          </div>
          <div style={{height: 600, width: 800, overflow: "scroll"}}>
            {this.state.posts}
          </div>
        </div>
      );
    }
  }
}

export default TagPage