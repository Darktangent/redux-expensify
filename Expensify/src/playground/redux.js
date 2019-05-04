import { createStore } from 'redux';
const incrementCount = ({ increment = 1 } = {}) => {
	return {
		type: 'INCREMENT',
		increment: increment
	};
};
const decrementCount = ({ decrement = -1 } = {}) => {
	return {
		type: 'DECREMENT',
		decrement: decrement
	};
};
const setCount = ({ count = 0 } = {}) => {
	return {
		type: 'SET',
		count: count
	};
};
const resetCount = () => {
	return {
		type: 'RESET'
	};
};

// reducer
// reducer are pure fn- output determined by input
const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			// const increment =
			// 	typeof action.increment === 'number' ? action.increment : 1;

			return {
				count: state.count + action.increment
			};
		case 'DECREMENT':
			// const decrement =
			// 	typeof action.decrement === 'number' ? action.decrement : -1;
			return {
				count: state.count - action.decrement
			};
		case 'SET':
			return {
				count: action.count
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
};
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// Actions-object sent to the store
// store.dispatch({
// 	type: 'INCREMENT',
// 	increment: 5
// });
store.dispatch(incrementCount({ increment: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrement: 10 }));
store.dispatch({
	type: 'RESET'
});
