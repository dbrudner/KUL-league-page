import React, {Component} from 'react';
import axios from 'axios';
import Table from '../../../styled/elements/table';
import DesktopInput from '../../../styled/elements/desktop-input'
import HoverHighlight from '../../../styled/modifiers/hover-highlight'

export default class ScheduleTable extends Component {

	constructor(props) {
		super(props)

		this.state = {
			date: "",
			teamHome: "",
			teamAway: "",
			location: "",
			error: "",
			schedule: []
		}
	}

	componentDidMount() {
		axios.get('/games')
		.then(res => {
			this.setState({schedule: res.data})
		})
	}

	addToSchedule = () => {
		this.setState({error: ""})
		const hasError = Object.keys(this.state).reduce((error, category) => {
			console.log(category);
			if (error) return error;
			if (!this.state[category]) return category;
		}, null)

		if (hasError) {
			return this.setState({error: hasError})
		}

		const {error, schedule, ...newGame} = this.state
		return;
		axios.post("/newgame", newGame)
		.then(res => {
			console.log(res);
		})
	}

	handleChange = (name, e) => this.setState({[name]: e.target.value})

	renderSchedule = schedule => {
		return schedule.map(game => {
			const { date, teamHome, teamAway, location } = game;

			return (
				<tr>
					<td>{date}</td>
					<td>{teamHome}</td>
					<td>{teamAway}</td>
					<td>{location}</td>
					<td>
						<div>
							<a href="#">edit</a>
						</div>
						<div>
							<a href="#">delete</a>
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
				<Table noWidth>
					<thead className="text-center">
						<tr>
							<th>Date</th>
							<th>Home team</th>
							<th >Away team</th>
							<th >Location</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>
								<DesktopInput  onChange={e =>this.handleChange("date", e)} value={this.state.date} type="date" />
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
