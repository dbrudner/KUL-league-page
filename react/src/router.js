import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Login from './components/login/login';
import SignUp from './components/sign-up/sign-up';
import Schedule from './components/schedule/schedule';
import Admin from './components/admin/admin';
import AdminSchedule from './components/admin/schedule/schedule';
import Register from './components/register/register';
import NoMatchingRoute from './components/no-matching-router';
import Stats from './components/stats/stats';
import Players from './components/admin/players/players';
import Teams from './components/admin/teams/teams';

class App extends Component {
    render() {
		return (
            <Router>
                <div>
                    <Navbar/>
                    <div style={{margin: "60px 20px 120px 20px"}}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/signup' component={SignUp} />
                            <Route exact path='/schedule' component={Schedule} />
                            <Route exact path='/admin' component={Admin} />
                            <Route exact path='/admin/schedule' component={AdminSchedule} />
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/stats' component={Stats} />
                            <Route exact path='/admin/players' component={Players} />
                            <Route exact path='/admin/teams' component={Teams} />
                            <Route component={NoMatchingRoute} />
                        </Switch>
                    </div>
                </div>
            </Router>
		);
    }
}

export default App;