import React, { Component } from "react";
import Select from "../../../styled/elements/select";
import H3 from "../../../styled/elements/h3";
import Slider from "../../../styled/blocks/slider";
import DescriptionBox from "./description-box";

export default function(
	value,
	name,
	description,
	lowValueDescription,
	highValueDescription
) {
	return function(props) {
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

					<DescriptionBox>{description}</DescriptionBox>
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
							{lowValueDescription}
						</div>
						<div
							style={{
								textAlign: "center",
								color: "#3642e8",
								fontWeight: 700
							}}
						>
							{highValueDescription}
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

		return <div>{renderItem(value, name)}</div>;
	};
}
