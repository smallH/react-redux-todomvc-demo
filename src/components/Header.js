import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

class Header extends React.Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {}
	}

	onSaveHandle = (text) => {
		if(text.length !== 0) {
			this.props.addTodo(text)
		}
	}

	render() {
		return(
			<header className="header">
    		<h1>TODOS</h1>
    		<TodoTextInput onSave={this.onSaveHandle} placeholder="在此处添加您的任务"/>
  		</header>
		);
	}
}

export default Header