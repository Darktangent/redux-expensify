'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		// this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		// this.handlePick = this.handlePick.bind(this);
		// this.handleDeleteOption = this.handleDeleteOption(this);
		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.state = {
			options: props.options
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var json = localStorage.getItem('options');
				var options = JSON.parse(json);
				if (opotions) {
					this.setState(function () {
						return {
							options: options
						};
					});
				}
			} catch (e) {
				// do nothing if json invalid
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var json = JSON.stringify(this.state.options);
				localStorage.setItem('options', json);
			}
			console.log('save');
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			// this.setState(() => {
			// 	return {
			// 		options: []
			// 	};
			// });
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: 'handleDeleteOption',
		value: function handleDeleteOption(optionToRemove) {
			console.log('hdo', optionToRemove);
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optionToRemove !== option;
					})
				};
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randomOption = Math.floor(Math.random() * this.state.options.length);
			var pick = this.state.options[randomOption];
			alert(pick);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
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
			this.setState(function (prevState) {
				return {
					options: prevState.options.concat([option])
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var title = 'Indecision';
			var subtitle = 'Put your life in the hands of a computer';
			// const options = ['one', 'two', 'four'];
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, {
					handlePick: this.handlePick.bind(this),
					hasOptions: this.state.options.length > 0
				}),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions.bind(this),
					handleDeleteOption: this.handleDeleteOption.bind(this)
				}),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption.bind(this) })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
	options: []
};

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};
Header.defaultProps = {
	title: 'Indecison App'
};

var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ disabled: !props.hasOptions, onClick: props.handlePick },
			'What should I do?'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove All'
		),
		props.options.length === 0 && React.createElement(
			'p',
			null,
			'Please add an option to get started'
		),
		props.options.map(function (option) {
			return React.createElement(Option, {
				key: option,
				optionText: option,
				handleDeleteOption: props.handleDeleteOption
			});
		})
	);
};

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'p',
			null,
			'Option:',
			props.optionText
		),
		React.createElement(
			'button',
			{ onClick: function onClick() {
					return props.handleDeleteOption(props.optionText);
				} },
			'Remove'
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.state = { error: undefined };
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();
			var option = e.target.elements.option.value.trim();
			var error = this.props.handleAddOption(option);
			this.setState(function () {
				return {
					error: error
				};
			});
			if (!error) {
				e.target.elements.option.value = '';
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
