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
			team1: "",
			team2: "",
			location: ""
		}
	}

	addToSchedule = () => {
		const newGame = {...this.state}
		axios.post("/newgame", newGame)
		.then(res => {
			console.log(res);
		})
	}

	render() {
		return (
			<Table>
				<thead>
					<th>Date</th>
					<th>Team 1</th>
					<th>Team 2</th>
					<th>Location</th>
					<th>Whatever</th>
					<th></th>
				</thead>
				<tbody>
					<tr>
						<th>
							<DesktopInput type="date" />
						</th>
						<th>
							<select>
								<option value="">Team 1</option>
								<option value="">Team 2</option>
								<option value="">Team 3</option>
							</select>
						</th>
						<th>
							<select>
								<option value="">Team 1</option>
								<option value="">Team 2</option>
								<option value="">Team 3</option>
							</select>
						</th>
						<th>
							<DesktopInput />
						</th>
						<th>
							<DesktopInput />
						</th>
						<th>
							<HoverHighlight onClick={this.addToSchedule} style={{cursor: "pointer"}}>Add <i className="fa fa-plus-circle"></i></HoverHighlight>
						</th>
					</tr>
				</tbody>
			</Table>
		)
	}
}
