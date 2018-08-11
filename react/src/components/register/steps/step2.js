import React, { Component } from "react";
import Select from "../../../styled/elements/select";
import H3 from "../../../styled/elements/h3";
import Slider from "../../../styled/blocks/slider";

export default function Step1(props) {
	const { experience, timePlayed, athleticism } = props.data;

	console.log(props.data.experience);

	const renderItem = (value, name) => {
		return (
			<div>
				<h2
					style={{
						textTransform: "uppercase",
						letterSpacing: "10px",
						textAlign: "center"
					}}
				>
					{name}
				</h2>

				<p
					style={{
						margin: "10vh 5vw 10vh 5vw",
						lineHeight: "3vh",
						border: "1px solid rgb(255, 255, 255, .4)",
						padding: "2vh",
						color: "rgb(255, 255, 255, .7)"
					}}
				>
					How experienced of a player are you? Perhaps it's your first
					season, or maybe you're a professional with double digit
					years of ultimate.
				</p>
				<div
					style={{
						fontSize: "1rem",
						display: "flex",
						justifyContent: "space-between",
						textTransform: "uppercase",
						letterSpacing: "10px"
					}}
				>
					<div
						style={{
							textAlign: "center",
							color: "#954ae8",
							fontWeight: 700
						}}
					>
						Beginner
					</div>
					<div
						style={{
							textAlign: "center",
							color: "#3642e8",
							fontWeight: 700
						}}
					>
						Pro
					</div>
				</div>
				<div>
					<Slider
						value={props.data[value]}
						onChange={e =>
							props.handleChange(value, e.target.value)
						}
					/>
				</div>
			</div>
		);
	};

	return (
		<div>
			{renderItem("experience", "Experience")}
			{/* {renderItem("timePlayed", "Time Played")}
			{renderItem("athleticism", "Athleticism")} */}
		</div>
	);
}
