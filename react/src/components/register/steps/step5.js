import React, { Component } from "react";
import Slider from "../../../styled/blocks/slider";
import logo from "../../../assets/images/logo2.svg";
import DescriptionBox from "./description-box";

const standardTicks = ["6'8", "6'4", "6'0", "5'8", "5'4", "5'0", ""];
const metricTicks = ["203", "193", "183", "173", "163", "152", ""];

const ticks = [];

export default class extends Component {
	constructor(props) {
		super(props);
		this.sliderRef = React.createRef();

		this.state = {
			value: 0
		};
	}

	render() {
		console.log(this.props.data.height);

		const getHeight = () => {
			if (this.props.data.height > 91) {
				return 91;
			}

			if (this.props.data.height < 16) {
				return 16;
			}
			return this.props.data.height;
		};

		const renderHeight = () => {
			return standardTicks.map((item, i) => {
				return (
					<div
						key={i}
						style={{
							display: "flex",
							justifyContent: "space-between"
						}}
					>
						<div>{item}</div>
						<div
							style={{
								backgroundColor: "rgb(216, 216, 216, 0.3)",
								height: "1px",
								width: "100vw",
								marginTop: ".7rem",
								marginLeft: "5px",
								marginRight: "5px"
							}}
						/>
						<div>{metricTicks[i]}</div>
					</div>
				);
			});
		};

		return (
			<div>
				<h2
					style={{
						textTransform: "uppercase",
						letterSpacing: "10px",
						textAlign: "center"
					}}
				>
					Height
				</h2>
				<div
					style={{ display: "flex", justifyContent: "space-around" }}
				/>
				<Slider
					value={this.props.data.height}
					onChange={e =>
						this.props.handleChange("height", e.target.value)
					}
					ref={this.sliderRef}
				/>

				<div
					style={{
						height: "50vh",
						backgroundColor: "transparent",
						transform: "translateY(2vh) translateX(1vh)",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between"
					}}
				>
					{renderHeight()}
					<div
						style={{
							position: "absolute",
							bottom: "0",
							left: `calc(45vw - 40vh * ${Number(getHeight()) /
								200})`,
							height: `calc((40vh * ${Number(getHeight()) /
								100}) + 10vh)`,
							width: `calc((40vh * ${Number(getHeight()) /
								100}) + 10vh)`
						}}
					>
						<img src={logo} />
					</div>
					{/* Actual indicator, if needed */}
					{/* <div
						style={{
							backgroundColor: "white",
							width: "20px",
							height: "1px",
							position: "absolute",
							left: "10vw",
							bottom: `calc(49vh * ${Number(
								this.props.data.height
							) / 100})`
						}}
					/> */}
				</div>
			</div>
		);
	}
}
