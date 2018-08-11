import React from "react";
import P from "../../../styled/elements/p";
import { Link } from "react-router-dom";

export default function Confirm() {
	return (
		<div>
			<h3>You are confirmed for this season!</h3>
			<P>Payment info?</P>
			<Link to="/">Home</Link>
		</div>
	);
}
