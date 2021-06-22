import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import signin from './pages/signin';
import signup from './pages/signup';
import Rider from './pages/rider';
import Driver from './pages/driver';
import BrowseHome from './pages/browseHome';
import ProfilePage from './pages/profile';
import Trip from './pages/trip';
import Booking from './pages/booking';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={signin} exact/>
        <Route path='/signup' component={signup} exact/>
        <Route path='/rider' component={Rider} exact/>
        <Route path='/driver' component={Driver} exact/>
        <Route path='/browseHome' component={BrowseHome} exact/>
        <Route path='/profile' component={ProfilePage} exact/>
        <Route path='/booking' component={Booking} exact/>
        <Route path='/trip' component={Trip} exact/>
      </Switch>
    </Router>
  );
}

export default App;
