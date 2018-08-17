import React, { Component } from "react";
import Input from "../../../styled/elements/input";
import Label from "../../../styled/elements/label";
import Button from "../../../styled/elements/button";
import DescriptionBox from "./description-box";

export default function Step1(props) {
	const {
		jerseyName,
		jerseyNumber,
		jerseyNumberBackup,
		jerseyStyle
	} = props.data;

	console.log(jerseyStyle);

	return (
		<div>
			<div>
				<Input
					placeholder="Jersey name"
					autoFocus
					type="text"
					value={jerseyName}
					onChange={e =>
						props.handleChange("jerseyName", e.target.value)
					}
				/>
			</div>
			<div>
				<Input
					placeholder="Jersey number"
					type="text"
					value={jerseyNumber}
					onChange={e =>
						props.handleChange("jerseyNumber", e.target.value)
					}
				/>
			</div>
			<div>
				<Input
					placeholder="Jersey backup number"
					type="number"
					value={jerseyNumberBackup}
					onChange={e =>
						props.handleChange("jerseyNumberBackup", e.target.value)
					}
				/>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					marginTop: "10vh"
				}}
			>
				<Button
					onClick={() => props.handleChange(jerseyStyle, "sleeves")}
					border={
						jerseyStyle === "sleeves"
							? "1px solid white"
							: "transparent"
					}
					active={jerseyStyle === "sleeves"}
				>
					Sleeves
				</Button>
				<Button
					onClick={() =>
						props.handleChange(jerseyStyle, "sleeveless")
					}
					border={
						jerseyStyle === "sleeveless"
							? "1px solid white"
							: "transparent"
					}
					active={jerseyStyle === "sleeveless"}
				>
					Sleeveless
				</Button>
			</div>
		</div>
	);
}
