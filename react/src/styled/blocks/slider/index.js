import styled from "styled-components";

const Slider = styled.input.attrs({
	type: "range",
	min: "1",
	max: "100"
})`
	height: 56px;
	-webkit-appearance: none;
	margin: 10px 0;
	width: 100%;
	background-color: transparent;
	-webkit-transform-origin: 50% 50%;
	-moz-transform-origin: 50% 50%;
	-ms-transform-origin: 50% 50%;
	-o-transform-origin: 50% 50%;
	transform-origin: 50% 50%;

	transform: ${props => props.vertical && "rotate(90deg)"};
	width: ${props => props.vertical && "50vh"};

	:focus {
		outline: none;
	}
	::-webkit-slider-runnable-track {
		width: 100%;
		height: 16px;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: linear-gradient(to right, #954ae8, #3642e8);
		border-radius: 12px;
		border: 0px solid #000000;
	}
	::-webkit-slider-thumb {
		box-shadow: 0px 0px 0px #000000;

		height: 49px;
		width: 50px;
		border-radius: 25px;
		background: #f0fffe;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -17px;
	}
	:focus::-webkit-slider-runnable-track {
		background: linear-gradient(to right, #954ae8, #3642e8);
	}
	::-moz-range-track {
		width: 100%;
		height: 16px;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: linear-gradient(to right, #954ae8, #3642e8);
		border-radius: 12px;
		border: 0px solid #000000;
	}
	::-moz-range-thumb {
		box-shadow: 0px 0px 0px #000000;

		height: 49px;
		width: 50px;
		border-radius: 25px;
		background: #f0fffe;
		cursor: pointer;
	}
	::-ms-track {
		width: 100%;
		height: 16px;
		cursor: pointer;
		animate: 0.2s;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	::-ms-fill-lower {
		background: linear-gradient(to right, #954ae8, #3642e8);
		border: 0px solid #000000;
		border-radius: 24px;
		box-shadow: 0px 0px 0px #000000;
	}
	::-ms-fill-upper {
		background: linear-gradient(to right, #954ae8, #3642e8);
		border: 0px solid #000000;
		border-radius: 24px;
		box-shadow: 0px 0px 0px #000000;
	}
	::-ms-thumb {
		margin-top: 1px;
		box-shadow: 0px 0px 0px #000000;

		height: 49px;
		width: 50px;
		border-radius: 25px;
		background: #f0fffe;
		cursor: pointer;
	}
	:focus::-ms-fill-lower {
		background: linear-gradient(to right, #954ae8, #3642e8);
	}
	:focus::-ms-fill-upper {
		background: linear-gradient(to right, #954ae8, #3642e8);
	}
`;

export default Slider;
