import React from 'react';

class TodoListItem extends React.Component {

	render() {
		return (
			<div>
			    <button type="button" 
			    		className="btn btn-default"
			    		onClick = {() => {
			    			this.props.selectList(this.props.name, this.props.id)
			    		}}
			    >
			    {this.props.name}
			    </button>
			</div>
		)
	}
}

export default TodoListItem;