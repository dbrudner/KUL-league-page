import React, {Component} from 'react';
import axios from 'axios';
import Table from '../../../../styled/elements/table';
import P from '../../../../styled/elements/p';
import PlayerSearch from './player-search';

export default class Players extends Component {

	constructor(props) {
		super(props)

		this.state = {
			allPlayers: [],
			displayPlayers: [],
			search: ""
		}
	}

	componentDidMount() {
		axios.get("/players")
		.then(res => {
			this.setState({allPlayers: res.data, displayPlayers: res.data})
		})
	}

	renderUserInfo = () => {

		return this.state.displayPlayers.map(player => {
			return (
				<tr className="text-center" style={player.isRegistered ? null : {backgroundColor: "#ff9292"}}>
					<td>{(`${player.firstName || ''} ${player.lastName || ''}`).trim() || "None"}</td>
					<td>{player.gender ? player.gender.charAt(0) : ""}</td>
					<td>{player.email}</td>
					<td>{player.athleticism}</td>
					<td>{player.experience}</td>
					<td>{player.height}</td>
					<td>{player.jerseyNumber}</td>
					<td>{player.jerseyName}</td>
					<td>{player.jerseySize}</td>
				</tr>
			)
		})
	}

	handleChange = e => {

		this.setState({search: e.target.value}, () => {
			const displayPlayers = this.state.allPlayers.filter(player => (`${player.firstName} ${player.lastName}`).match(this.state.search))
			this.setState({displayPlayers})
		})
	}

	render() {

		const firstRowHeader = {
			backgroundColor: "white",
			color: "white",
			letterSpacing: "22px",
			textTransform: "uppercase",
			textAlign: "center"
		}

		const asterisk = {
			color: "red",
			transform: `translateY(-5px)`,
			fontSize: "8px"
		}

		return (
			<div>
				<P helper color="#ff9292">
					<i style={asterisk} className="fas fa-asterisk"></i>Players highlighted in <span style={{color: "#ff9292"}} >red</span> aren't registered
				</P>
				<PlayerSearch handleChange={this.handleChange} value={this.state.search} />
				<Table>
					<thead>
						<tr style={firstRowHeader}>
							<th colSpan="3" style={{backgroundColor: "orange"}}>Basic Info</th>
							<th colSpan="3" style={{backgroundColor: "lightgreen"}}>Player Skill</th>
							<th colSpan="3" style={{backgroundColor: "dodgerblue"}}>Jersey</th>
						</tr>
						<tr className="text-center">
							<th>Name</th>
							<th>G</th>
							<th>Email</th>
							<th>Athleticism</th>
							<th>Experience</th>
							<th>Height</th>
							<th>Number</th>
							<th>Name</th>
							<th>Size</th>
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
