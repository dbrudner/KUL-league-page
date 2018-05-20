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
import Schedule from './components/schedule/schedule';
import Admin from './components/admin/admin';
import AdminSchedule from './components/admin/schedule/schedule';
import Register from './components/register/register';

class App extends Component {



    render() {
		return (
            <Router>
                <div>
                    <Navbar/>
                    <div style={{marginBottom: "120px"}}>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/signup' component={SignUp} />
                        <Route exact path='/schedule' component={Schedule} />
                        <Route exact path='/admin' component={Admin} />
                        <Route exact path='/admin/schedule' component={AdminSchedule} />
                        <Route exact path='/register' component={Register} />
                    </div>
                </div>
            </Router>
		);
    }
}

export default App;