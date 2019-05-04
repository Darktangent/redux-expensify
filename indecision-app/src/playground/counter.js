class Counter extends React.Component {
	constructor(props) {
		super(props);

		// this.handleAddOne = this.handleAddOne.bind(this);
		// this.handleAddOne = this.handleMinusOne.bind(this);
		// this.handleAddOne = this.handleReset.bind(this);
		this.state = { count: 0 };
	}

	handleAddOne() {
		this.setState(prevState => {
			return { count: prevState.count + 1 };
		});
	}
	handleMinusOne() {
		this.setState(prevState => {
			return { count: prevState.count - 1 };
		});
	}
	handleReset() {
		this.setState(prevState => {
			return { count: 0 };
		});
	}
	render() {
		return (
			<div>
				<h1>Count:{this.state.count} </h1>
				<button onClick={this.handleAddOne.bind(this)}>+1</button>
				<button onClick={this.handleMinusOne.bind(this)}>-1</button>
				<button onClick={this.handleReset.bind(this)}>Reset</button>
			</div>
		);
	}
}
ReactDOM.render(<Counter />, document.getElementById('app'));

// let count=0
// const myId="my-id";
// const addOne=()=>{
//     count++
//     renderCounterApp()
// }
// const minusOne=()=>{
//     count=count-1
//     renderCounterApp()
// }
// const reset=()=>{
//     count=0
//     renderCounterApp()
// }

// const renderCounterApp=()=>{
//     const templateTwo=(
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addOne} id="myId" className="count">+1</button>
//             <button onClick={minusOne} id="myId" className="count">-1</button>
//             <button onClick={reset} id="myId" className="count">Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo,document.getElementById("app"))

// }

// renderCounterApp()
