import styled from 'styled-components';

const Table = styled.table`

    border: 1px solid black;
    width: ${props => props.noWidth ? null : `80%`};
    margin-left: 10%;

    thead {
        background-color: black;
        color: white;
    }

    th {
        text-align: ${props => props.center ? "center" : null};
        padding: 1rem;
        font-size: 1.6rem;
    }

    td {
        text-align: ${props => props.center ? "center" : null};
        padding: 1rem;
        font-size: 1.6rem;

        :not(last-child) {
            border-bottom: 1px solid black;
        }
    }

    tbody {
        tr {
            :hover {
                background-color: lightgray !important;
                transition: all .2s;
            }
        }
    }
`

export default Table;