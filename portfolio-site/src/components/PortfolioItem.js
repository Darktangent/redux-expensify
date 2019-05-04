import React from 'react';

const PortfolioItem = props => {
	return (
		<div>
			<h1>An App that I built</h1>
			<p>This page is for the item with the id of {props.match.params.id}</p>
		</div>
	);
};
export default PortfolioItem;
