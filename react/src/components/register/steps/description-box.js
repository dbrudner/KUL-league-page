import styled from "styled-components";

const DescriptionBox = styled.p`
	margin: ${props => props.margin || "10vh 5vw 10vh 5vw"};
	line-height: 3vh;
	border: 1px solid rgb(255, 255, 255, 0.4);
	padding: 2vh;
	color: rgb(255, 255, 255, 0.7);
`;

export default DescriptionBox;
