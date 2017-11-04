import {ADD_TODO, ADD_LIST, REG_CHANGE, FILTER_LISTS} from '../constants'

export const addList = (name) => {
	const action = {
		type: ADD_LIST,
		name: name,
	}
	return action;
}

export const addTodo = (value, uuid, listName) => {
	const action = {
		type: ADD_TODO,
		value: value,
		uuid: uuid,
		listName: listName
	}
	return action;
}

export const regChange = (uuid, done, listName) => {
	const action = {
		type: REG_CHANGE,
		uuid: uuid,
		done: done,
		listName: listName
	}
	return action;
}


export const filterLists = (filterKey) => {
	const action = {
		type: FILTER_LISTS,
		filterKey: filterKey
	}
	return action;
}