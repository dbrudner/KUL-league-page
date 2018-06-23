import styled from 'styled-components'

const HoverHighlight = styled.span`
	:hover {
		transition: all .3s;
		color: ${props => props.theme.colorPrimary};
	}
`

export default HoverHighlight;