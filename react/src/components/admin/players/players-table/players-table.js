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
            console.log(player.gender);
            return (
                <tr style={player.isRegistered ? {backgroundColor: "#d7ffd7"} : {backgroundColor: "#ff9292"}}>
                    <td>{(`${player.firstName || ''} ${player.lastName || ''}`).trim() || "None"}</td>
                    <td>{player.gender ? player.gender.charAt(0) : ""}</td>
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
                            <th>G</th>
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
