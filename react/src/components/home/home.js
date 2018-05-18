import React, { Component } from 'react';
import Button from '../../styled/elements/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, logout } from '../../actions/index';


class Home extends Component {

    constructor(props) {

        super(props);
        this.state = {email: null};
    }

    componentDidMount() {

        axios.get('/test')
        .then(res => {
            console.log(res.data);
            const {email} = res.data;
            if (email) {
                this.props.login(email);
                this.setState({email})
            }
        })
    }

    logout = () => {
        axios.get('/logout')
        .then(res => {
            console.log(res);
            this.props.logout();
            this.setState({email: null})            
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                {this.state.email ? <h1>Welcome back, {this.state.email}</h1> : null}

                <Link to="/login"><Button>Login</Button></Link>
                {this.state.email ? <Button onClick={this.logout}>Logout</Button> : null}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({login, logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)