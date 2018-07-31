import React from 'react';
import axios from 'axios'
import TeamsTable from './teams-table'
import DesktopInput from '../../../styled/elements/desktop-input'

export default function AdminTeams() {
    return (
        <div className="container-fluid">
            <h1>Manage Teams</h1>
            <h2>Current Teams</h2>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <TeamsTable />
            </div>
        </div>
    )
}