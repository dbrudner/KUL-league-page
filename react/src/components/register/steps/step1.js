import React, { Component } from "react";
import Input from "../../../styled/elements/input";
import Label from "../../../styled/elements/label";
import Button from "../../../styled/elements/button";

export default function Step1(props) {
	const { firstName, lastName, gender, age, height } = props.data;

	return (
		<div>
			<div>
				<Input
					placeholder="First Name"
					autoFocus
					type="text"
					value={firstName}
					onChange={e =>
						props.handleChange("firstName", e.target.value)
					}
				/>
			</div>
			<div>
				<Input
					placeholder="Last Name"
					type="text"
					value={lastName}
					onChange={e =>
						props.handleChange("lastName", e.target.value)
					}
				/>
			</div>
			<div>
				<Input
					placeholder="Age"
					type="number"
					value={age}
					onChange={e => props.handleChange("age", e.target.value)}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					marginTop: "3vh"
				}}
			>
				<Button
					onClick={() => props.handleChange("gender", "Male")}
					border={
						gender === "Male" ? "1px solid white" : "transparent"
					}
					active={gender === "Male"}
				>
					Male
				</Button>
				<Button
					onClick={() => props.handleChange("gender", "Female")}
					border={
						gender === "Female" ? "1px solid white" : "transparent"
					}
				>
					Female
				</Button>
				{/* <Input type="text" value={gender} onChange={e => props.handleChange("gender", e.target.value)}/>                 */}
			</div>
		</div>
	);
}
