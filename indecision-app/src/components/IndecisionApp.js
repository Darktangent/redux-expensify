import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component {
	state = { options: [], selectedOption: undefined };
	// constructor(props) {
	// 	super(props);
	// 	// this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
	// 	// this.handlePick = this.handlePick.bind(this);
	// 	// this.handleDeleteOption = this.handleDeleteOption(this);
	// 	this.state = {
	// 		options: props.options
	// 	};
	// }
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (opotions) {
				this.setState(() => ({
					options: options
				}));
			}
		} catch (e) {
			// do nothing if json invalid
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
		console.log('save');
	}
	componentWillUnmount() {}
	handleDeleteOptions = () => {
		// this.setState(() => {
		// 	return {
		// 		options: []
		// 	};
		// });
		this.setState(() => ({
			options: []
		}));
	};
	handleDeleteOption = optionToRemove => {
		console.log('hdo', optionToRemove);
		this.setState(prevState => ({
			options: prevState.options.filter(option => {
				return optionToRemove !== option;
			})
		}));
	};
	handlePick = () => {
		const randomOption = Math.floor(Math.random() * this.state.options.length);
		const pick = this.state.options[randomOption];
		// alert(pick);
		this.setState(() => {
			return { selectedOption: pick };
		});
	};
	clearSelectedOption = () => {
		this.setState(() => {
			return { selectedOption: undefined };
		});
	};
	handleAddOption = option => {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		// this.setState(prevState => {
		// 	return {
		// 		options: prevState.options.concat([option])
		// 	};
		// });
		this.setState(prevState => ({
			options: prevState.options.concat([option])
		}));
	};
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		// const options = ['one', 'two', 'four'];
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<div className='container'>
					<Action
						handlePick={this.handlePick.bind(this)}
						hasOptions={this.state.options.length > 0}
					/>
					<div className='widget'>
						<Options
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions.bind(this)}
							handleDeleteOption={this.handleDeleteOption.bind(this)}
						/>
						<AddOption handleAddOption={this.handleAddOption.bind(this)} />
					</div>
				</div>
				<OptionModal
					clearSelectedOption={this.clearSelectedOption}
					selectedOption={this.state.selectedOption}
				/>
			</div>
		);
	}
}
IndecisionApp.defaultProps = {
	options: []
};
