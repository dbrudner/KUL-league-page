import styled from 'styled-components'

const Button = styled.button`
	background-color: ${props => props.backgroundColor ? props.theme.colorPrimary: props.backgroundColor};
	color: ${props => props.color ? props.color : "white"};
	border: ${props => props.border ? props.border : "0px solid white"}
	padding: 5px 20px;
	display: inline-block;
	font-size: 36px;
	margin: ${props => props.margin || 0}
	width: ${props => props.width || ""}

	:active {
		border: 0px
	}
`

export default Button