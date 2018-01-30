import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import AddBathroom from './pages/AddBathroom';
import NoMatch from './pages/NoMatch';
import NavBar from './components/NavBar';

const App = () =>
<Router>
    <div>
        <NavBar loggedIn={false}/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/map" component={Map}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/add" component={AddBathroom}/>
            <Route component={NoMatch} />
        </Switch>
    </div>
</Router>;

export default App;