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
		axios.get('/games')
		.then(res => {
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

	renderSchedule = schedule => {
		return schedule.map(game => {
			const { _id, date, teamHome, teamAway, location, time } = game;

			return (
				<tr key={_id}>
					<td>{date}</td>
					<td>{time}</td>
					<td>{teamHome}</td>
					<td>{teamAway}</td>
					<td>{location}</td>
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
							<th>Date</th>
							<th>Time</th>
							<th>Home team</th>
							<th >Away team</th>
							<th >Location</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr style={{borderBottom: "1px solid black"}}>
							<th>
								<DesktopInput  onChange={e =>this.handleChange("date", e)} value={this.state.date} type="date" />
							</th>
							<th onChange={e =>this.handleChange("time", e)}>
								<DesktopInput value={this.state.time} />
							</th>
							<th>
								<select onChange={e =>this.handleChange("teamHome", e)}>
									<option value="Team 1">Team 1</option>
									<option value="Team 2">Team 2</option>
									<option value="Team 3">Team 3</option>
								</select>
							</th>
							<th>
								<select onChange={e =>this.handleChange("teamAway", e)}>
									<option value="Team 1">Team 1</option>
									<option value="Team 2">Team 2</option>
									<option value="Team 3">Team 3</option>
								</select>
							</th>
							<th onChange={e =>this.handleChange("location", e)}>
								<DesktopInput value={this.state.location} />
							</th>
							<th>
								<HoverHighlight onClick={this.addToSchedule} style={{cursor: "pointer"}}>Add <i className="fa fa-plus-circle"></i></HoverHighlight>
							</th>
						</tr>
						{this.renderSchedule(this.state.schedule)}
					</tbody>
				</Table>
			</React.Fragment>
		)
	}
}
