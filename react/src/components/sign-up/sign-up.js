import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Header from "../../styled/elements/header";
import P from "../../styled/elements/p";
import Button from "../../styled/elements/button";
import Input from "../../styled/elements/input";
import Label from "../../styled/elements/label";
import { Link } from "react-router-dom";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			passwordConfirm: "",
			error: "",
			redirect: null
		};
	}

	handleChange = (key, value) => {
		this.setState({ [key]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { email, password, passwordConfirm } = this.state;
		if (password !== passwordConfirm) return;
		if (!password.trim() || !email.trim()) return;

		axios
			.post("/signup", { email, password })
			.then(res => {
				this.setState({ redirect: "/" });
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		if (this.state.redirect) return <Redirect to="/" />;

		return (
			<div
				style={{
					textAlign: "center"
				}}
			>
				<h1 style={{ letterSpacing: "5px" }} center>
					SIGN UP
				</h1>
				{/* <P helper>Need help?</P> */}
				<form onSubmit={this.handleSubmit}>
					<div s>
						<Input
							placeholder="E-mail"
							type="text"
							value={this.state.email}
							onChange={e =>
								this.handleChange("email", e.target.value)
							}
						/>
					</div>
					<div>
						<Input
							placeholder="Password"
							type="password"
							value={this.state.password}
							onChange={e =>
								this.handleChange("password", e.target.value)
							}
						/>
					</div>
					<div>
						<Input
							placeholder="Confirm your password"
							type="text"
							value={this.state.passwordConfirm}
							onChange={e =>
								this.handleChange(
									"passwordConfirm",
									e.target.value
								)
							}
						/>
					</div>
					{/* <p
						style={{
							textAlign: "left",
							marginTop: "2vh",
							marginLeft: "10%"
						}}
					>
						Already have an account? <Link to="/home">Sign in</Link>
					</p> */}
					<Button width="80%" margin="5vh 0" center type="submit">
						Submit
					</Button>
				</form>
			</div>
		);
	}
}
