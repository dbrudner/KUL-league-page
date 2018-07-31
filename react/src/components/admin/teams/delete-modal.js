import React from 'react';
import Modal from 'react-modal';
import Table from '../../../styled/elements/table';
import P from '../../../styled/elements/p';
import Button from '../../../styled/elements/desktop-button';
import "./modal.css";

const modalStyle = {
	content : {
	  top                   : '30%',
	  left                  : '50%',
	  right                 : 'auto',
	  bottom                : 'auto',
	  marginRight           : '-50%',
	  transform             : 'translate(-50%, -50%)',
	  overflow: "hidden"
	},
	overlay: {
		backgroundColor: "rgba(60, 60, 60, 0.75)",
	}
  };

const panelHeading = {
	backgroundColor: "dodgerblue",
	width: "120%",
	height: "40px",
	margin: "-20px",
	padding: "5px 20px"
}

const DeleteModal = props => {
	if (!props.game) return null	

	const { date, time, teamHome, teamAway, location } = props.game;

	return (
		<div style={{overflowX: "hidden"}}>
			<Modal
				isOpen={props.isOpen}
				onRequestClose={props.close}
				contentLabel="Example Modal"
				ariaHideApp={false}
				style={modalStyle}
			>
				<div style={panelHeading}>
					<h1 style={{color: "white"}}>Delete Game</h1>
				</div>
				<h2 style={{marginTop: "30px"}}>Are you sure you want to delete this game?</h2>
				<P helper error><i className="fa fa-exclamation-circle"></i> Deletetion is permenent</P>
				<Table noWidth>
					<thead className="text-center">
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Home team</th>
							<th >Away team</th>
							<th >Location</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>{date}</th>
							<th>{time}</th>
							<th>{teamHome}</th>
							<th>{teamAway}</th>
							<th>{location}</th>
						</tr>
					</tbody>
				</Table>
				<Button margin="20px 0 0 0" backgroundColor="red">Delete <i className="fa fa-times"></i></Button>
			</Modal>
		</div>
	)
}
 
export default DeleteModal;