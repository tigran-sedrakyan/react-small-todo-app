import React from 'react';
import {connect} from 'react-redux';
import {filterLists} from '../../actions';

class FilterBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputvalue: ''
		}
	}

	render() {
		return(
				<div className="form-group">
					<input 	type="text"
							className="form-control" 
							id="exampleInputEmail1" 
							placeholder="Search for a list"
							value = {this.state.inputvalue}
							onChange = {e => {
								this.setState({inputvalue: e.target.value});
								this.props.filterLists(e.target.value)
							}}
					/>
				</div>
		)
	}
}

export default connect (undefined, {filterLists}) (FilterBar);