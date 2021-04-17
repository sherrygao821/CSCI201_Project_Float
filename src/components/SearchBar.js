import { Component } from "react";
import "../components/SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWord: ""
    };
  }

  searchWord = () => {
    if (this.state.inputWord.trim() !== "") {
      // TODO: use API to search for words/tags
    }
  };

  bindChange = (e) => {
    this.setState({
      inputWord: e.target.value
    })
  };

  render() {
    return (
      <div className="searchBar">
        <img className="left" src="/icons/search.png" alt="" />
        <input
          className="mid"
          onChange={(e) => this.bindChange(e)}
          placeholder="Search for keywords or tags">
        </input>
        <button className="right" onClick={() => this.searchWord()}>
          search
        </button>
      </div>
    );
  }
}

export default SearchBar;
