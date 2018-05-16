import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Login from './components/login/login';
import SignUp from './components/sign-up/sign-up';


class App extends Component {
    render() {
		return (
            <Router>
                <div>
                    <Navbar/>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                </div>
            </Router>
		);
    }
}

export default App;