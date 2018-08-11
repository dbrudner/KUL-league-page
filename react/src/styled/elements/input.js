import styled from "styled-components";

const Input = styled.input`
	margin-left: 10%;
	border-radius: 2px;
	border: none;
	border-bottom: 1px solid rgb(216, 216, 216, 1);
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

	:focus {
		outline: none;
	}

	::placeholder {
		color: white;
	}
`;

export default Input;
