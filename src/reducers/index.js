import { combineReducers } from 'redux'
import {ADD_TODO, ADD_LIST, REG_CHANGE, FILTER_LISTS} from '../constants'

const list = (action) => {
	return {
		name: action.name,
		show: true,
		count: 0
	}
}

const todo = (action) => {
	return {
		value: action.value,
		listName: action.listName,
		id: action.uuid,
		done: false
	}
}

const lists = (state = [], action) => {
	let lists = null;
	switch (action.type) {
		case ADD_LIST:
			lists = [...state, list(action)]
			lists.sort(function(a, b) {
				return a.name.toUpperCase() > b.name.toUpperCase() ? 1: -1;
			})
			return lists;
		case FILTER_LISTS:
			lists = [...state];
			lists.map((item) => {
				if (item.name.substring(0, action.filterKey.length) !== action.filterKey)
				{
					item.show = false;
				}
				else {
					item.show = true
				}
			})
			return lists;
		case REG_CHANGE:
			lists = [...state];
			let filtered = lists.filter((item) => item.name === action.listName);
			let current_list = filtered[0];
			action.done === false ? current_list.count = current_list.count + 1 : current_list.count = current_list.count - 1;
			return lists;
		default:
			return state;
	}
}

const todos = (state = [], action) => {
	let todos = null;
	switch (action.type) {
		case ADD_TODO:
			todos = [...state, todo(action)];
			todos = sortTodosByName(todos, todos.length);
			todos = sortTodosByState(todos)
			return todos;
		case REG_CHANGE:
			let element = state.find(obj => obj.id === action.uuid)
			element.done = !element.done
			todos = [...state]
			todos = sortTodosByState(todos, element)
			return todos;
		default:
			return state;
	}
}

const sortTodosByState = (todos, element = {}) => {
	todos = todos.sort(function(a, b) {
		return a.done === b.done ? 0: a.done? 1: -1;
	})
	let undone = todos.slice(0, todos.indexOf(element));
	let done = todos.slice(todos.indexOf(element))
	undone = sortTodosByName(undone);
	done = sortTodosByName(done);

	let final = [...undone, ...done];
	return final;
}

const sortTodosByName = (todos, index) => {
	todos.sort(function(a, b) {
		return a.value.toUpperCase() > b.value.toUpperCase() ? 1: -1;
	})

	return todos
}

export default combineReducers({
	lists,
	todos
})