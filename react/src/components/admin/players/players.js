import React, {Component} from 'react';
import axios from 'axios';
import PlayersTable from './players-table/players-table';

export default class Players extends Component {

    render() {
        return (
            <div className="container-fluid">
                <h1>Players</h1>
                <PlayersTable />
            </div>
        )
    }
}
