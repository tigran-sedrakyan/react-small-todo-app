import React from 'react';
import {regChange} from '../../actions';
import {connect} from 'react-redux';

class Todo extends React.Component {

	regChange() {
		this.props.regChange(this.props.id, this.props.done, this.props.listName)
	}

	render() {
		return (
			<div className="form-check">
			  <label className="form-check-label">
			    <input 
			    	className="form-check-input checkbox" 
			    	type="checkbox" 
			    	value=""
			    	onChange = {() => {
			    		this.regChange()
			    	}}
			    />
			    	{this.props.done ? <s>{this.props.value}</s>: this.props.value}
			  </label>
			</div>
		)
	}
}

export default connect(undefined, {regChange})(Todo);