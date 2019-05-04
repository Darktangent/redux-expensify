import React from 'react';
import { Link } from 'react-router-dom';
const Portfolio = props => {
	return (
		<div>
			<h1>Portfolio Page</h1>
			<p>Checkout my work </p>
			<Link to='/portfolio/1'>Link 1</Link>
			<Link to='/portfolio/2'>Link 2</Link>
		</div>
	);
};
export default Portfolio;
