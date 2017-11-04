import React from 'react';
import Todos from '../molecules/Todos';
import TodoInput from '../atoms/TodoInput'
import {addTodo} from '../../actions';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

class TodoListContent extends React.Component {
	constructor(props) {
		super(props);
		this.addTodo = this.addTodo.bind(this);
		this.state = {
			count: 0
		}
	}

	addTodo (todoValue) {
		this.props.addTodo (todoValue, uuidv4(), this.props.listName);
	}

	render() {
		let list = this.props.lists.filter((item) => item.name === this.props.listName)
		let todos = this.props.todos.filter((todo) => todo.listName === this.props.listName)
		if (this.props.listName !== undefined) {
			return (
				<div>
					<b><em>{this.props.listName}</em></b>	
					<div>{list[0].count} of {todos.length} Done </div>
					<div>
						<Todos className = 'col' name = {this.props.listName} todoValues = {this.props.todos}/>
					</div>
					<div className = 'row'>
						<TodoInput className = "inputholder" addTodo = {this.addTodo}/>
					</div>
				</div>
			)
		}
		else {
			return (
				<div>Please select a todolist</div>
			)
		}
	}
}

const mapStateToProps = ({todos, lists}) => ({todos, lists});

export default connect(mapStateToProps, {addTodo}) (TodoListContent);