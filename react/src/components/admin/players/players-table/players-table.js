import React, {Component} from 'react';
import axios from 'axios';
import Table from '../../../../styled/elements/table'

export default class Players extends Component {

    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios.get("/players")
        .then(res => {
            this.setState({players: res.data})
        })
    }

    renderUserInfo = () => {

        return this.state.players.map(player => {
            return (
                <tr style={player.isRegistered ? {backgroundColor: "green"} : {backgroundColor: "red"}}>
                    <td>{(`${player.firstName || ''} ${player.lastName || ''}`).trim() || "None"}</td>
                    <td>{player.gender}</td>
                </tr>
            )
        })

        // return Object.keys(this.state.players).map(key => {   
        //     return (
        //         <tr key={key}>
        //             <td>{category}</td>
        //             <td>{this.state.players[key]}</td>
        //         </tr>
        //     )
        // })
    }

    render() {
    
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserInfo()}                    
                    </tbody>
                </Table>
            </div>
        )
    }
}
