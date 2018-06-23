import styled from 'styled-components';

const Tab = styled.div`
	display: inline-block;
	text-align: center;
	text-transform: uppercase;
	padding: 10px;
	background-color: ${props => props.isActive ? "green" : "gray"};
	width: ${props => `${(100/props.numberOfTabs)}%`};
`

export default Tab;