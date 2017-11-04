import React from 'react';
import './App.css';
import TodoListContent from './organisms/TodoListContent';
import TodoLists from './organisms/TodoLists';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listName: undefined,
			listId : undefined
		}
		this.selectList = this.selectList.bind(this)
	}

	selectList(selectedName, selectedId) {
		this.setState({listName: selectedName})
		this.setState({listId: selectedId})
	}

	render() {
		return (
		<div className="container">
		  <div className="row">
		    <div className="col">
		    	<TodoLists selectList = {this.selectList}/>
		    </div>
		    <div className="col">
		    	<TodoListContent listName = {this.state.listName} listId = {this.state.listId}/>
		    </div>
		  </div>
		</div>
		)
	}
}

export default App;