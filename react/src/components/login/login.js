import React, {Component} from 'react';
import axios from 'axios';
import Header from '../../styled/elements/header';
import P from '../../styled/elements/p';
import Button from '../../styled/elements/button';
import Input from '../../styled/elements/input';

import {Redirect} from 'react-router-dom'

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: '',
			redirect: null
		}
	}

	componentDidMount() {
		// axios.get('/test')
		// .then(res => {
		//     console.log(res.data);
		// })
	}

	handleChange = (key, value) => {this.setState({[key]: value})}

	handleSubmit = e => {
		e.preventDefault();
		console.log("SUBMIT");
		const {email, password, passwordConfirm} = this.state;

		axios.post('/login', {email, password})
		.then(res => {
			console.log(res.data);
			axios.get('/test')
			this.setState({redirect: true})
		}).catch(err => {
			console.log(err);
			this.setState({
				error: "Wrong E-Mail or password."
			})
		})
	}

	render() {
		console.log("LOGIN");

		if (this.state.redirect) return <Redirect to="/" />

		return (
			<div>
				<Header center>Login</Header>
				<P helper>Need help?</P>
				<P error>{this.state.error}</P>                
				<form onSubmit={this.handleSubmit}>
					<div>
						<Input type="text" value={this.state.email} onChange={e => this.handleChange("email", e.target.value)} />
					</div>
					<div>
						<Input type="text" value={this.state.password} onChange={e => this.handleChange("password", e.target.value)} />
					</div>
					<Button onClick={this.handleSubmit} type="submit">Submit</Button>
				</form>
			</div>
		)
	}
}