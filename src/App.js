import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Dms from './pages/Dms';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import loginPage from './pages/loginPage';
import registerForm from './components/registerForm';
// import Addpost from './components/Addpost';


function App() {
  return (

    // <div> 
    //   <Addpost />
    // </div>
    <div className ='app'>
      <Router>
          <Navbar />
            <Switch>
              <Route path='/register' exact component={registerForm} />
              <Route path='/dms' exact component={Dms} />
              <Route path='/notifications' exact component={Notifications} />
              <Route path='/profile' exact component={Profile} />
              <Route path='/login' exact component={loginPage} />
              <Route path='/' exact component={Home} />
            </Switch>
          {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
