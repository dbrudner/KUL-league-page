import React, {Component} from 'react';
import axios from 'axios';
import Table from '../../../styled/elements/table';
import DesktopInput from '../../../styled/elements/desktop-input'
import HoverHighlight from '../../../styled/modifiers/hover-highlight'
import DeleteModal from './delete-modal';

export default class ScheduleTable extends Component {

	constructor(props) {
		super(props)

		this.state = {
			date: "",
			time: "",
			teamHome: "",
			teamAway: "",
			location: "",
			error: "",
			schedule: [],
			confirmDeleteModal: false,
			deleteBlock: null
		}
	}

	componentDidMount() {
		axios.get('/teams')
		.then(res => {
			console.log(res);
			this.setState({schedule: res.data})
		})
	}

	addToSchedule = () => {
		const {error, schedule, confirmDeleteModal, deleteBlock, ...newGame} = this.state

		this.setState({error: ""})
		const hasError = Object.keys(newGame).reduce((error, category) => {
			if (error) return error;
			if (!this.state[category]) return category;
		}, null)

		if (hasError) {
			return this.setState({error: hasError})
		}

		axios.post("/newgame", newGame)
		.then(res => {
			console.log(res.data);
			this.setState({schedule: [res.data, ...this.state.schedule]})
		})
	}

	handleChange = (name, e) => this.setState({[name]: e.target.value})

	openDeleteModal = game => {
		this.setState({confirmDeleteModal: !this.state.confirmDeleteModal, deleteBlock: game})
	}

	renderTeams = teams => {
		return teams.map(game => {
			const { _id, name, captain, players, gamesPlayed, wins, losses } = game;

			return (
				<tr key={_id}>
					<td>{name}</td>
					<td>{captain}</td>
					<td>{players}</td>
					<td>{gamesPlayed}</td>
					<td>{wins}</td>
					<td>{losses}</td>
					<td>
						<div>
							<p>edit</p>
						</div>
						<div>
							<p onClick={() => this.openDeleteModal(game)}>delete</p>
						</div>
					</td>
				</tr>
			)
		})
	}

	render() {
		return (
			<React.Fragment>
				{this.state.error ? <p>Enter {this.state.error} before submitting</p> : null}

				<DeleteModal game={this.state.deleteBlock} close={this.openDeleteModal} isOpen={this.state.confirmDeleteModal}  />

				<Table noWidth>
					<thead className="text-center">
						<tr>
							<th>Name</th>
							<th>Captain</th>
							<th>Games Played</th>
							<th>Wins</th>
							<th>Losses</th>
							<th>Players</th>
						</tr>
					</thead>
					<tbody>
						<tr style={{borderBottom: "1px solid black"}}>
							<th>
								<DesktopInput onChange={e =>this.handleChange("date", e)} value={this.state.name} />
							</th>
							<th>
								<DesktopInput onChange={e =>this.handleChange("captain", e)} value={this.state.captain} />
							</th>
							<th>
								<DesktopInput onChange={e =>this.handleChange("gamesPlayed", e)} value={this.state.gamesPlayed} />
							</th>
							<th>
								<DesktopInput onChange={e =>this.handleChange("wins", e)} value={this.state.wins} />
							</th>
							<th>
								<DesktopInput onChange={e =>this.handleChange("losses", e)}  value={this.state.losses} />
							</th>
							<th>
								<HoverHighlight onClick={this.addTeam} style={{cursor: "pointer"}}>Add <i className="fa fa-plus-circle"></i></HoverHighlight>
							</th>
						</tr>
						{/* {this.renderSchedule(this.state.schedule)} */}
					</tbody>
				</Table>
			</React.Fragment>
		)
	}
}
