import { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TabNav from './components/TabNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: "Home"
    };
  }

  setSelectedPage = (tab) => {
    this.setState({ selectedPage: tab });
    // TODO: navigate to that specific page
  };

  render() {
    return (
      <div className="App">
        <TabNav
          tabs={["Create", "Home", "Notification", "Profile"]}
          setSelectedPage={this.setSelectedPage}
        ></TabNav>
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default App;
