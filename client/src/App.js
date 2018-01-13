import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";

const App = () =>
<Router>
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route component={NoMatch} />
        </Switch>
    </div>
</Router>;

export default App;
