class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		// this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		// this.handlePick = this.handlePick.bind(this);
		// this.handleDeleteOption = this.handleDeleteOption(this);
		this.state = {
			options: props.options
		};
	}
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
	handleDeleteOptions() {
		// this.setState(() => {
		// 	return {
		// 		options: []
		// 	};
		// });
		this.setState(() => ({
			options: []
		}));
	}
	handleDeleteOption(optionToRemove) {
		console.log('hdo', optionToRemove);
		this.setState(prevState => ({
			options: prevState.options.filter(option => {
				return optionToRemove !== option;
			})
		}));
	}
	handlePick() {
		const randomOption = Math.floor(Math.random() * this.state.options.length);
		const pick = this.state.options[randomOption];
		alert(pick);
	}
	handleAddOption(option) {
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
	}
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		// const options = ['one', 'two', 'four'];
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action
					handlePick={this.handlePick.bind(this)}
					hasOptions={this.state.options.length > 0}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions.bind(this)}
					handleDeleteOption={this.handleDeleteOption.bind(this)}
				/>
				<AddOption handleAddOption={this.handleAddOption.bind(this)} />
			</div>
		);
	}
}
IndecisionApp.defaultProps = {
	options: []
};

const Header = props => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};
Header.defaultProps = {
	title: 'Indecison App'
};

const Action = props => {
	return (
		<div>
			<button disabled={!props.hasOptions} onClick={props.handlePick}>
				What should I do?
			</button>
		</div>
	);
};

const Options = props => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started</p>}
			{props.options.map(option => {
				return (
					<Option
						key={option}
						optionText={option}
						handleDeleteOption={props.handleDeleteOption}
					/>
				);
			})}
			{/* <Option /> */}
		</div>
	);
};

const Option = props => {
	return (
		<div>
			<p>Option:{props.optionText}</p>
			<button onClick={() => props.handleDeleteOption(props.optionText)}>
				Remove
			</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = { error: undefined };
	}
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		this.setState(() => {
			return {
				error: error
			};
		});
		if (!error) {
			e.target.elements.option.value = '';
		}
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option' />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
