import React from 'react';
import TodoListItem from '../atoms/TodoListItem';
import TodoListInput from '../atoms/TodoListInput';
import FilterBar from '../atoms/FilterBar';
import { connect } from 'react-redux';
import { addList } from '../../actions';

class TodoLists extends React.Component {
	constructor(props) {
		super(props);
		this.addTodoList = this.addTodoList.bind(this)
	}

	addTodoList(listName) {
		this.props.addList( listName )
	}

	render() {
		return (
			<div>
				<div> Todolists:</div>
				<FilterBar/>	
				{this.props.lists.length === 0 && <div><em>Empty Here (add a todolist)</em></div>}
				<div>
				{this.props.lists.filter((item) => {
					return item.show === true
				}).map((item, index) => {
						return(<TodoListItem className = "col" selectList = {this.props.selectList} id = {index} key = {index} name = {item.name}/>)
				})}
				</div>
				<div className = "row inputholder">
					<TodoListInput addTodoList = {this.addTodoList}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({lists}) => ({lists})

export default connect(mapStateToProps, {addList}) (TodoLists);