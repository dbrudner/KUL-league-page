import styled from 'styled-components'

const Slider = styled.input.attrs({
    type: "range",
    min: "1",
    max: "100"
})`
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 25px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;

    :hover {
        opacity: 1; /* Fully shown on mouse-over */
    }
    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */ 
    ::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #4CAF50; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }
    ::-moz-range-thumb {
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #4CAF50; /* Green background */
        cursor: pointer; /* Cursor on hover */
    }
`

export default Slider;