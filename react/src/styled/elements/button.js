import styled from "styled-components";

const getColor = (props, type) => {
	if (props.transparent) {
		return "transparent";
	}

	if (props[type]) {
		return props[type];
	}

	if (type === "backgroundColor") {
		return "transparent";
	}

	if (type === "color") {
		return props.theme.white;
	}
};

const getBorder = props => {
	if (props.border === "transparent") {
		return "none";
	}

	if (props.border) {
		return props.border;
	}

	return `1px solid ${props.theme.white}`;
};

const Button = styled.button`
	background-color: ${props => getColor(props, "backgroundColor")};
	color: ${props => getColor(props, "color")};
	border: ${props => getBorder(props)};
	border-radius: 2px;
	display: inline-block;
	padding: 10px 15px;
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: 16px;
	width: ${props => props.width}
	/* font-size: 36px; */
	/* margin: ${props => props.margin || 0} */
	/* width: ${props => props.width || ""} */

	/* :active {
		border: 0px
	} */
`;

export default Button;
