import React from 'react';
import Todo from '../atoms/Todo'

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoValues : this.props.todoValues
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({todoValues: nextProps.todoValues})
	}

	render() {
		return (
			this.props.todoValues.map((value, index) => {
				return value.listName === this.props.name && 
				<Todo 	
						listName = {this.props.name} 
						key = {index}
						id = {value.id} 
						value = {value.value}
						done = {value.done}
				/>
			})
		)
	}
}

export default Todos