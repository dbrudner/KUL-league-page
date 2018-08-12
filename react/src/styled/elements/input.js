import styled from "styled-components";
import lock from "../../assets/images/lock-icon.svg";
import profile from "../../assets/images/profile.svg";

const images = { lock, profile };

const Input = styled.input`
	margin-left: 10%;
	border-top: none;
	border-left: none;
	border-right: none;
	border-radius: 2px;
	border-bottom: 1px solid !important;
	border-color: rgb(216, 216, 216, 1) !important;
	margin-bottom: 1rem;
	height: 4.8rem;
	font-size: 1.8rem;
	color: white;
	display: block;
	background-color: transparent;
	opacity: 0.6;
	margin: auto;
	width: 80%;
	margin-top: 5vh;
	text-indent: ${props => props.indent || null};

	background-image: ${props =>
		props.bgImg ? `url(${images[props.bgImg]})` : null};

	background-position: 5px 9px;
	background-repeat: no-repeat;
	background-size: 25px 25px;
	:focus {
		outline: none;
	}

	::placeholder {
		color: white;
	}
`;

export default Input;
