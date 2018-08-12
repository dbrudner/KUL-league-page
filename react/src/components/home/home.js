import React, { Component } from "react";
import Button from "../../styled/elements/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, logout, changeSiteContext } from "../../actions/index";
import UserNotRegistered from "./user-not-registered";
import UserRegistered from "./user-registered";
import UserNotLoggedIn from "./user-not-logged-in";
import Header from "../../styled/elements/header";
import HomeStyled from "./home-styled";
import logo from "../../assets/images/logo.svg";
import Input from "../../styled/elements/input";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { email: null, loading: true };
	}

	componentDidMount() {
		this.props.changeSiteContext("Home");
		console.log(this.props);
		axios.get("/test").then(res => {
			const { email, isRegistered } = res.data;

			if (email) {
				this.props.login(email);
				this.setState({ email, isRegistered, isLoggedIn: true }, () => {
					console.log(this.state);
				});
			} else {
				this.setState({ isLoggedIn: false });
			}

			this.setState({ loading: false });
		});
	}

	logout = () => {
		axios
			.get("/logout")
			.then(res => {
				console.log(res);
				this.props.logout();
				this.setState({ email: null });
			})
			.catch(err => {
				console.log(err);
			});
	};

	login = () => {
		console.log("Login");
	};

	render() {
		if (this.state.loading) return <div>Loading</div>;

		return (
			<HomeStyled>
				<div>
					<img src={logo} />
					<div>
						<h1>KUL</h1>
					</div>
				</div>
				<Input indent="60px" bgImg="profile" placeholder="Username" />
				<Input
					indent="60px"
					bgImg="lock"
					placeholder="Password"
					type="password"
				/>
				<div
					style={{ justifyContent: "space-around", marginTop: "5vh" }}
				>
					<Button onClick={this.login} width="30vw">
						Login
					</Button>
					<Link to="/signup">
						<Button border="transparent" width="30vw">
							Sign Up
						</Button>
					</Link>
				</div>
			</HomeStyled>
		);
	}
}

function mapStateToProps(state) {
	return {
		state
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ login, logout, changeSiteContext }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
