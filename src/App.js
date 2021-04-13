import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Dms from './pages/Dms';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';


function App() {
  return (

    <>
      <Router>
            <Navbar />
          <div className = 'feed'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/dms' exact component={Dms} />
              <Route path='/notifications' exact component={Notifications} />
              <Route path='/profile' exact component={Profile} />
            </Switch>
          </div>
      </Router>
    </>
  );
}

export default App;
