import React from 'react';

const playerSearch = props => {
	return (
		<React.Fragment>
			<input onChange={props.handleChange} value={props.value} />
		</React.Fragment>
	);
};

export default playerSearch;