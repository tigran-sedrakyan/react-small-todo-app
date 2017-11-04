import React from 'react';

class TodoInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputvalue: ''
		}
	}

	render() {
		return (
			<div className="form-group">
				<div >
					<input 	type="text"
							className="form-control" 
							id="exampleInputEmail1" 
							placeholder="Add a todo"
							value = {this.state.inputvalue}
							onChange = {e => {
								this.setState({inputvalue: e.target.value})
							}}
					/>
				</div>
				<button className="btn btn-primary"
					onClick = { () => {
						if (this.state.inputvalue !== '') {
							this.props.addTodo(this.state.inputvalue)
							this.setState({inputvalue: ''})
						}
					}}
				>
					Add
				</button>
			</div>

		)
	}
}

export default TodoInput;