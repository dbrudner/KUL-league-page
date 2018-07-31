import React, { Component } from 'react';
import Button from '../../styled/elements/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, logout, changeSiteContext } from '../../actions/index';
import UserNotRegistered from './user-not-registered';
import UserRegistered from './user-registered';
import UserNotLoggedIn from './user-not-logged-in';
import Header from '../../styled/elements/header';
import styled from "styled-components";

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {email: null, loading: true};
	}

	componentDidMount() {

		this.props.changeSiteContext("Home");
		console.log(this.props);
		axios.get('/test')
		.then(res => {
			const {email, isRegistered} = res.data;

			if (email) {
				this.props.login(email);
				this.setState({email, isRegistered, isLoggedIn: true}, () => {
					console.log(this.state);
				})
			} else  {
				this.setState({isLoggedIn: false})
			}

			this.setState({loading: false})
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

		if (this.state.loading) return <div>Loading</div>

		return (
			<div>
				{this.state.email ? <h2 className="text-center">Welcome back, {this.state.email}</h2> : null}
				{this.state.isRegistered ? <UserRegistered/> : this.state.isLoggedIn ? <UserNotRegistered /> : <UserNotLoggedIn />}
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
	return bindActionCreators({login, logout, changeSiteContext}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)