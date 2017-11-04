import React from 'react';

class TodoListInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputvalue: ''
		}
	}

	render() {
		return (
			<div>
				<div className="form-group">
					<input 	type="text"
							className="form-control" 
							id="exampleInputEmail1" 
							placeholder="Add a todolist"
							value = {this.state.inputvalue}
							onChange = {e => {
								this.setState({inputvalue: e.target.value})
							}}
					/>
					<button className="btn btn-primary"
					onClick = { () => {
						if (!(this.state.inputvalue === '')) {
							this.props.addTodoList(this.state.inputvalue)
						}
						this.setState({inputvalue: ''})
					}}
				>
					Add
				</button>
				</div>
			</div>

		)
	}
}

export default TodoListInput;