import styled from "styled-components";

const Home = styled.div`
	text-align: center;

	img {
		height: 15vw;
	}

	input {
		margin: auto;
		width: 80%;
		margin-top: 5vh;
	}

	div {
		display: flex;
		justify-content: center;
		margin-bottom: 10vh;

		div {
			display: block;
			margin: 5px;
		}

		h1 {
			text-align: left;
			letter-spacing: 7px;
			margin-top: 5px;
		}
	}
`;

export default Home;
