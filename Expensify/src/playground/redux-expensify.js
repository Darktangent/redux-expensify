import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// add expense
const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});
//remove
const removeExpense = ({ id }) => ({
	type: 'REMOVE_EXPENSE',
	id
});
// edit expense
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});
// set text filter
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT',
	text: text
});
// sort by date
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});
// sort by amount
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});
// set start
const setStartDate = (time = undefined) => ({
	type: 'SET_START_DATE',
	time
});
const setEndDate = (time = undefined) => ({
	type: 'SET_END_DATE',
	time
});
// set end
// expense reducer
// state.concat(action.expense);
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(st => st.id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if (expense.id === action.id) {
					const up = Object.assign({}, expense, action.updates);
					return up;
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT':
			const text = Object.assign({}, state, { text: action.text });
			console.log(text);
			return text;
		case 'SORT_BY_DATE':
			const date = Object.assign({}, state, { sortBy: 'date' });
			return date;
		case 'SORT_BY_AMOUNT':
			const amount = Object.assign({}, state, { sortBy: 'amount' });
			return amount;
		case 'SET_START_DATE':
			const startDate = Object.assign({}, state, { startDate: action.time });
			return startDate;
		case 'SET_END_DATE':
			const endDate = Object.assign({}, state, { endDate: action.time });
			return endDate;
		default:
			return state;
	}
};
// store
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter(expense => {
			const startDateMatch =
				typeof startDate !== 'number' || expense.createdAt >= startDate;
			const endDateMatch =
				typeof endDate !== 'number' || expense.createdAt <= endDate;
			const textMatch = expense.description
				.toLowerCase()
				.includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			}
			if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};
store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

//get expenses

const expenseOne = store.dispatch(
	addExpense({ description: 'Rent', amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
	addExpense({ description: 'coffee', amount: 200, createdAt: -1000 })
);
// console.log(expenseOne);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1025));
const demoState = {
	expenses: [
		{
			id: '123',
			description: 'January Rent',
			note: 'Final payment for the address',
			amount: 54500,
			createdAt: 0
		}
	],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};
