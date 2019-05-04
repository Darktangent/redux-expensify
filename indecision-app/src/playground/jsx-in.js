const app = {
	title: 'Indecison App',
	subtitle: 'Let the app decide what you should do',
	options: []
};
const onFormSubmit = e => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderApp();
	}
};
const removeAll = e => {
	e.preventDefault();
	app.options = [];
	renderApp();
};
const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};
const renderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? `Here are your options` : `No options`}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>
				What should I do?
			</button>

			<button onClick={removeAll}>Remove All</button>
			<ol>
				{app.options.map((option, i) => {
					return <li key={i}>{option}</li>;
				})}
			</ol>
			<form action='' onSubmit={onFormSubmit}>
				<input type='text' name='option' />
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, document.getElementById('app'));
};
renderApp();
