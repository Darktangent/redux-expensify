import { Switch, BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='/portfolio' exact={true} component={Portfolio} />
				<Route path='/portfolio/:id' component={PortfolioItem} />
				<Route path='/contact' component={Contact} />
				<Route path='/help' component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);
export default AppRouter;
